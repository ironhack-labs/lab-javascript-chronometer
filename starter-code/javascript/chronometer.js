// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  var that = this;

  var intervalId = setInterval(function() {
    that.currentTime += 1;
  }, 1000);
};

 Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60);
 };

 Chronometer.prototype.setSeconds = function () {
  return (this.currentTime)-Math.floor(this.currentTime/60)*60;
};

 Chronometer.prototype.twoDigitsNumber = function (value) {
  return ("0" + value).slice(-2);
 };

Chronometer.prototype.setTime = function () {
var minutes = this.twoDigitsNumber(this.setMinutes)
var seconds = this.twoDigitsNumber(this.setSeconds(minutes))
};

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {

// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
