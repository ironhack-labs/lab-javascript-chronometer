// Constructor
 function Chronometer() {
  this.currentTime = 0
  this.intervalId = null
 }

 Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(function () {
  console.log(currentTime);

  this.currentTime += 1;
  this.setTime();
  }, 1000)
};

 Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
 };

 Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime % 60)
 };

 Chronometer.prototype.twoDigitsNumber = function () {
  if (number < 10) {
    return "0" + number.toString();
  } else {
      return number.toString();
  }

 };

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
 };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
