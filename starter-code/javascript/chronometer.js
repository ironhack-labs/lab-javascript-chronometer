// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval (function() {
    var i = 1;
    chronometer.currentTime++;
    i++;
    chronometer.setTime();
  }, 10);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 100 / 60);
};

Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime / 100 % 60);
};

Chronometer.prototype.twoDigitsNumber = function (time) {
  return ("0"+time).slice(-2);
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes()),
  this.seconds = this.twoDigitsNumber(this.setSeconds());
  this.milliseconds = this.twoDigitsNumber(this.setMilliseconds());
  printTime();
};

Chronometer.prototype.setMilliseconds = function () {
  return this.currentTime % 100;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.setTime();
};

// Chronometer.prototype.splitClick = function () {

// };
