// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  // because of scoping, make a copy of this
  var self = this;
  self.intervalId = setInterval(function() {
    self.currentTime ++;
    self.setTime();
    // console.log(self);
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  // return how many minutes (from seconds total)
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  // return seconds left after calculating minutes
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  // if one digit, add a leading 0
  if(number < 10) {
    return "0" + number.toString();
  } else {
    return number.toString();
  }
};

Chronometer.prototype.setTime = function () {
  // Taking the current time and set it in minutes and seconds (2 digits)
  this.twoDigitsNumber(this.setMinutes());
  this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  // stop the current interval
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  // reset the current time to 0
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
