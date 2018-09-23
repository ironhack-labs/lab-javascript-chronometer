// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  that = this;
  this.intervalId = setInterval(function () {
    that.currentTime++;
    that.setTime();
  }, 10);

  return that.currentTime;
};

Chronometer.prototype.setMinutes = function () {
  //return Math.floor(this.currentTime / 60);
  return Math.floor(this.currentTime / 6000);
};

Chronometer.prototype.setSeconds = function () {
  //return this.currentTime % 60;
  return Math.floor(this.currentTime / 100) % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  return value < 10 ? '0' + value : '' + value;
};

Chronometer.prototype.setMilliseconds = function () {
  return this.currentTime % 100;
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
  this.milliseconds = this.twoDigitsNumber(this.setMilliseconds());
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {
  var mins = chronometer.twoDigitsNumber(chronometer.setMinutes().toString());
  var secs = chronometer.twoDigitsNumber(chronometer.setSeconds().toString());
  var mills = chronometer.twoDigitsNumber(chronometer.setMilliseconds().toString());
  var time = mins + ':' + secs + ':' + mills;
  return time;
};
