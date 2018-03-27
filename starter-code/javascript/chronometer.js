// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;

}

Chronometer.prototype.startClick = function () {
  var self = this 
  setInterval(function() {
    self.currentTime += 1;
    self.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  if (this.currentTime < 60) {
    return 0;
  } else {
    return Math.floor(this.currentTime / 60);
  };
};

Chronometer.prototype.setSeconds = function () {
  var minutes = Math.floor(this.currentTime / 60);
  var seconds = this.currentTime - minutes * 60;
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  var string = number + ""
  if (string.length === 1) {
    return "0" + string;
  } else {
    return string;
  };
};

Chronometer.prototype.setTime = function () {
  var seconds = this.twoDigitsNumber(this.setSeconds());
  var minutes = this.twoDigitsNumber(this.setMinutes());
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

