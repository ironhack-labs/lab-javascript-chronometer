function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  var that = this;
  this.intervalId = setInterval(function() {
    that.setTime();

    that.currentTime++;
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function() {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function(twoDigits) {
  if (twoDigits <= 9) {
    return "0" + twoDigits;
  } else {
    return twoDigits.toString();
  }
};

Chronometer.prototype.setTime = function() {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  return [minutes, seconds];
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
