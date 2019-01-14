// Constructor

function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  let self = this;
  this.intervalId = setInterval(function() {
    self.setTime();
    self.currentTime += 1;
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  let min = Math.floor(this.currentTime / 60);
  return min;
};

Chronometer.prototype.setSeconds = function () {
  let min = Math.floor(this.currentTime / 60);
  let sec = this.currentTime - min * 60;
  return sec;
};

Chronometer.prototype.twoDigitsNumber = function (num) {
  if (num < 10) {
    num = ('0' + num.toString());
  } else {
    num = num.toString();
  }
  return num;
};

Chronometer.prototype.setTime = function () {
  let minutes = this.setMinutes();
  let seconds = this.setSeconds();
  minutes = this.twoDigitsNumber(minutes);
  seconds = this.twoDigitsNumber(seconds);
  return [minutes, seconds];
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {
  return this.setTime;
};
