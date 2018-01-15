// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 1000;
}

Chronometer.prototype.startClick = function() {
  var that = this;
  setInterval(function() {
    that.setTime();
    that.currentTime += 1;
  }, that.intervalId);
};

Chronometer.prototype.setMinutes = function() {
  return Math.trunc(this.currentTime / 60);
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
  var that = this;
  setInterval(function() {
    that.minutes = that.twoDigitsNumber(that.setMinutes());
    that.seconds = that.setSeconds();
  }, that.intervalId);
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
  return (this.currentTime = 0);
};

// Chronometer.prototype.splitClick = function () {

// };
