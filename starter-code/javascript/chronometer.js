// Constructor
function Chronometer() {
  this.currentTime;
  this.intervalId;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function() {
    this.currentTime += 1;
  }.bind(this), 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime - this.currentTime * 60;
};

Chronometer.prototype.twoDigitsNumber = function () {
  // if (this.currentTime < 10) {
  //   return "0" + this.currentTime;
};

Chronometer.prototype.setTime = function () {
  var minutes = this.currentTime;
  var seconds = this.currentTime * 60;
};

Chronometer.prototype.setMilliseconds = function () {
  
};

Chronometer.prototype.stopClick = function () {
  
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};
