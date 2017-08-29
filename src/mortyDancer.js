var MortyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="morty"><img src="mortyFace.png"></span>');
  this.setPosition(top, left);

  this.oldStep = Dancer.prototype.originalStep;
  this.oldStep.call(this);
};

MortyDancer.prototype = Object.create(Dancer.prototype);
MortyDancer.prototype.constructor = MortyDancer;

MortyDancer.prototype.step = function() {
  this.oldStep();
  // this.$node.toggle();
  this.$node.toggleClass('mortyReflect');
};