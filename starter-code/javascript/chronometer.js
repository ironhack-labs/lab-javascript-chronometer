// Constructor
function Chronometer() {
  this.currentTime = 0; 
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var self = this;
  this.intervalId = setInterval(function() {
    self.currentTime += 10;
    self.setTime();

    printTime();
  }, 10);
};

Chronometer.prototype.setMinutes = function () {

  return Math.floor(this.currentTime / 60000 );
};

Chronometer.prototype.setSeconds = function () {

  return Math.floor((this.currentTime % 60000)/1000);
};

Chronometer.prototype.setMilliseconds = function () {
  return Math.floor(this.currentTime % 1000);
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
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
  this.milliseconds = this.twoDigitsNumber(this.setMilliseconds());
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};
