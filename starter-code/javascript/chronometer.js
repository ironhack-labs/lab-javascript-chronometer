// Constructor

function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.Milli = 0;
  this.timeMilli = 0;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval (() => { 
    this.currentTime++;
    this.setTime();
  }, 1000);
  this.intimeMilli = setInterval (() => { 
    this.Milli++;
    this.setMilliseconds();
  }, 10);
};

Chronometer.prototype.setMinutes = function () {
  return parseInt(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (param) {
  if (param < 10){
    param = ("0" + param);
  }
  return param.toString();
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
};

Chronometer.prototype.setMilliseconds = function () {
  this.milliSec = this.twoDigitsNumber(this.Milli % 100);
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
  clearInterval(this.intimeMilli);
};

Chronometer.prototype.resetClick = function () {
  this.intervalId = 0;
  this.currentTime = 0;
  this.Milli = 0;
  this.setTime();
  this.setMilliseconds();
};

// Chronometer.prototype.splitClick = function () {

// };
