// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.minutes = 0;
};

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(() => {
    this.currentTime++;
    this.setTime();
    printTime();
    // if (this.currentTime >= 12000) {
    //   clearInterval(this.intervalId)
    // };
  }, 10);
  
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/6000);
};

Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime / 100 % 60);
};

Chronometer.prototype.twoDigitsNumber = function (num) {
  if (num < 10) {
    return '0' + num.toString();
  };
  return num.toString();
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes()),
  this.seconds = this.twoDigitsNumber(this.setSeconds());
  this.milisecs = this.twoDigitsNumber(this.setMilliseconds());
};

Chronometer.prototype.setMilliseconds = function () {
  return this.currentTime % 100;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };