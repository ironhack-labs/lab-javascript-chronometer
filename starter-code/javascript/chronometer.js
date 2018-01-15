function Chronometer() {
  this.currentTime = 0;
  this.intervalId = null;
}

Chronometer.prototype.startClick = function() {
  var that = this;
  that.intervalId = setInterval(function() {
    that.currentTime += 1;
    setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function() {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function(value) {
  if (value < 10) {
    return "0" + value;
  } else {
    return "" + value;
  }
};

Chronometer.prototype.setTime = function() {
  this.minutes = this.twoDigitsNumbers(this.setMinutes());
  this.seconds = this.twoDigitsNumbers(this.setSeconds());
  return this.minutes + " min" + this.seconds + " sec.";
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
