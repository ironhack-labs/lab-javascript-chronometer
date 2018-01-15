// @ts-check

// Constructor

function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}
// function Chronometer() {

// }

// Chronometer.prototype.startClick = function () {
Chronometer.prototype.startClick = function(Chronometer) {
  var that = this;
  this.intervalId = setInterval(function(currentTime) {
    that.currentTime += 1;
    that.setTime();
  }, 1000);
};

// Chronometer.prototype.setMinutes = function () {

// };

Chronometer.prototype.setMinutes = function() {
  return Math.floor(this.currentTime / 60);
};

// Chronometer.prototype.setSeconds = function () {

// };
Chronometer.prototype.setSeconds = function() {
  return this.currentTime % 60;
};

// Chronometer.prototype.twoDigitsNumber = function () {

// };

Chronometer.prototype.twoDigitsNumber = function(number) {
  if (number < 10) {
    return (number = "0" + number);
  } else {
    return (number = "" + number);
  }
};

// Chronometer.prototype.setTime = function () {

// };
Chronometer.prototype.setTime = function() {
  return (
    this.twoDigitsNumber(this.setMinutes()) +
    ":" +
    this.twoDigitsNumber(this.setSeconds())
  );
};

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {

// };

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

// Chronometer.prototype.resetClick = function () {

// };

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
