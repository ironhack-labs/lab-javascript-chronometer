// Constructor
function Chronometer() {
  this.seconds = 0;
  this.minutes = 0;
  this.currentTime = 0;
  this.intervalId = "";
}

Chronometer.prototype.startClick = function () {
  var that = this;

  this.intervalId = setInterval(function() {
    that.currentTime++;
    that.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  return ('0' + number).slice(-2);
};

Chronometer.prototype.setTime = function () {
  this.seconds = this.twoDigitsNumber(this.setSeconds());
  this.minutes = this.twoDigitsNumber(this.setMinutes());
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.setTime();
};

Chronometer.prototype.splitClick = function () {

};
