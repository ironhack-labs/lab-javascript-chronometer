// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(
    function() {
      this.currentTime++;
      this.setTime();
    }.bind(this),
    1000
  );
};

Chronometer.prototype.setMinutes = function() {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function() {
  return Math.floor(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function(digits) {
  if (digits < 10) {
    return "0" + digits;
  }
  return digits.toString();
};

Chronometer.prototype.setTime = function() {
  var minutes = this.setMinutes();
  minutes = this.twoDigitsNumber(minutes);
  var seconds = this.setSeconds();
  seconds = this.twoDigitsNumber(seconds);

  printTime(minutes, seconds);
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
};

Chronometer.prototype.splitClick = function() {
  var minutes = this.setMinutes();
  minutes = this.twoDigitsNumber(minutes);
  var seconds = this.setSeconds();
  seconds = this.twoDigitsNumber(seconds);

  return minutes.toString() + ":" + seconds.toString();
};
