// Constructor
function Chronometer() {
  var self = this;
  this.currentTime = 0;
  this.currentMilliseconds = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var self = this;

  this.intervalId = setInterval(function() {
    self.currentTime += 1;
    self.setTime();
  }, 1000);

  this.milIntervalId = setInterval(function() {
    if (self.currentMilliseconds === 59) {
      self.currentMilliseconds = 0;
    } else {
      self.currentMilliseconds += 1;
    }
    
    self.setTime();
  }, 1);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  return ('0' + value).slice(-2);
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  var milliseconds = this.twoDigitsNumber(this.setMilliseconds());

  return (minutes + seconds + milliseconds).toString();
};

Chronometer.prototype.setMilliseconds = function () {
  return this.currentMilliseconds % 1000;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
  clearInterval(this.milIntervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.currentMilliseconds = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
