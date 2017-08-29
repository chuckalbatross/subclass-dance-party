var RickDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer rick spin"><img src="resources/rick_face.png"></span>');
  this.$node.mouseover(this.moveToFurthestDancer.bind(this));
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = Dancer.prototype.originalStep;
  this.oldStep.call(this);
};

RickDancer.prototype = Object.create(new Dancer());
RickDancer.prototype.constructor = RickDancer;

RickDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.oldStep();
};

RickDancer.prototype.moveToFurthestDancer = function() {
  var furthestDancer = null;
  var furthestDistance = 0;

  for (var dancer of window.dancers) {
    var dancerTop = dancer.top;
    var dancerLeft = dancer.left;

    var currentDancerTop = this.top;
    var currentDancerLeft = this.left;

    var combinedDistance = (currentDancerTop - dancerTop) ** 2 + (currentDancerLeft - dancerLeft) ** 2;
    console.log(combinedDistance);
    if (combinedDistance > furthestDistance) {
      furthestDancer = dancer;
      furthestDistance = combinedDistance;
    } 
  }

  this.setPosition(furthestDancer.top, furthestDancer.left);
}
