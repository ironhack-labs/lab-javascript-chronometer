// Constructor

function Chronometer() {
  this.currentTime = 0;
  this.intervalId = "";
}

Chronometer.prototype.startClick = function() {
  var _this = this;
  this.intervalId = setInterval(function() {
    _this.currentTime++;
    _this.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  var minutes = Math.floor(this.currentTime / 60);
  return minutes;
};

Chronometer.prototype.setSeconds = function() {
  var seconds = this.currentTime - this.setMinutes() * 60;
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function(number) {
  return number.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
};

Chronometer.prototype.setTime = function() {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
  printTime(this.minutes, this.seconds);
};

//  Chronometer.prototype.setMilliseconds = function () {

//  };

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
