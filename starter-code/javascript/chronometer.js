// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function() {
    this.currentTime++;
    this.setTime(this.currentTime);
  }.bind(this), 1000)
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  var number = number;
  
  if (number < 10) {
    number = '0' + number;
  }

  return number.toString();
};

Chronometer.prototype.setTime = function () {
  var minutes = this.setMinutes();
  var seconds = this.setSeconds();
};

// Chronometer.prototype.setMilliseconds = function () {
  
// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
