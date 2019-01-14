// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
};

Chronometer.prototype.startClick = function () {
  let self = this;
  this.intervalId = setInterval(function setInterval() {
    self.currentTime += 1;
    self.setTime();
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  if (number < 10) {
    return "0" + number.toString();
  } else {
    return number.toString();
  }
};

Chronometer.prototype.setTime = function () {
  let seconds = this.setSeconds();
  let minutes = this.setMinutes();
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.intervalId = 0;
};

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
