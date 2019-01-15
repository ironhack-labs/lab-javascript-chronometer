// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  var that = this;

  this.intervalId = setInterval(function() {
    that.currentTime = that.currentTime + 1;
    that.setTime();
    console.log("IntervalId")
  }, 1000);

  setInterval(this.startStop, 100);
};

Chronometer.prototype.setMinutes = function() {
  if (this.currentTime / 60 <= 0) {
    return 0;
  }

  return parseInt(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function() {
  if (this.currentTime === 0) {
    return 0;
  }

  return this.currentTime - this.setMinutes() * 60;
};

Chronometer.prototype.twoDigitsNumber = function(number) {
  if (number < 10) {
    number = "0" + number;
  }
  return number.toString();
};

Chronometer.prototype.setTime = function() {
  var seconds = this.twoDigitsNumber(this.setSeconds());

  var minutes = this.twoDigitsNumber(this.setMinutes());

  var array = [seconds, minutes];
  return array;
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
