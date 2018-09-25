function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervalId = setInterval(function () {
    that.currentTime += 1;
    that.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  var that = this;
  return Math.floor(that.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
  var that = this;
  return that.currentTime%60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  return (value < 10 ? '0' : '') + value;
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  return minutes + ":" + seconds;
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime === 0;
};

Chronometer.prototype.splitClick = function () {

};