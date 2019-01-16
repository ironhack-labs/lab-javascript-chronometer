// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId;
  this.minutes = 0;
  this.seconds = 0;
};

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval((function() {
    this.currentTime += 1;
    this.setTime();
    printTime();
  }).bind(this), 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime - (Math.floor(this.currentTime / 60) * 60);
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  var num = number.toString();
  if (num.length === 1) {
    num = "0" + num;
  }
  return num;
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

 Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.minutes = 0;
  this.seconds = 0;
  clearInterval(intervalId);
};

Chronometer.prototype.split = function () {
  return this.minutes + ":" + this.seconds;
};