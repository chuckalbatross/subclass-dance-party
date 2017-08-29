var MortyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="morty"><img src="mortyPose1.png"></span>');
  this.$node = $('<img class="morty" src="mortyPose1.png">');
  this.setPosition(top, left);

  this.oldStep = Dancer.prototype.originalStep;
  this.oldStep.call(this);

  this.$node.mouseover(this.mouseover);
  this.$node.mouseout(this.mouseout);
};

MortyDancer.prototype = Object.create(Dancer.prototype);
MortyDancer.prototype.constructor = MortyDancer;

MortyDancer.prototype.step = function() {
  this.oldStep();
  // this.$node.toggle();
  this.$node.toggleClass('mortyReflect');
};

MortyDancer.prototype.mouseover = function() {
  console.log(this);
  //'this' is bound to element (<img ...>), so you must make 'this' a jQuery object, so you can call attr() on it.
  $(this).attr('src', 'mortyPose2.png');
};

MortyDancer.prototype.mouseout = function() {
  
};