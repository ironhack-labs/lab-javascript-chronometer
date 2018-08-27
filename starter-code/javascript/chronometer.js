// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.minutes = "00";
  this.seconds = "00";
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function () {
    this.currentTime++;
    this.setTime();
  }.bind(this), 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return Math.round(this.currentTime / 60 % 1 * 60);
};

Chronometer.prototype.twoDigitsNumber = function (e) {
  if (e < 10){
    return "0" + e;
  } else {
    return e.toString();
  }
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());

  printTime(this.minutes, this.seconds)
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
