// Constructor
function Chronometer() {
  this.currentTime = 0; 
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var self = this;
  this.intervalId = setInterval(function() {
    self.currentTime++;
    self.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  if (number < 10) {
    number = '0' + number;
    return number;
  } else {
    return number = '' + number;
  }
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes);
  this.seconds = this.twoDigitsNumber(this.setSeconds);
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};
