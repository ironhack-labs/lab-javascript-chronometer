// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = "";
};

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(() => {
    this.currentTime++;
  }, 1000);
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

};

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
