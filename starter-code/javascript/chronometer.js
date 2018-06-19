// Constructor

function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

//----- START

Chronometer.prototype.startClick = function() {
  var self = this;
  this.intervalId = setInterval(function() {
    self.currentTime++;
    self.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  var self = this;
  var minutes = self.currentTime / 60;
  return Math.floor(minutes);
};

Chronometer.prototype.setSeconds = function() {
  var self = this;
  var seconds = self.currentTime % 60;
  return Math.floor(seconds);
};

Chronometer.prototype.twoDigitsNumber = function(time) {
  var self = this;
  var stringifiedNumber = time.toString();
  return time < 10 ? "0" + stringifiedNumber : stringifiedNumber;
  // if (time < 10) {
  //  return '0' + stringifiedNumber;
  // } else {
  //   return stringifiedNumber
  // }
};

Chronometer.prototype.setTime = function() {
  var self = this;
  var minutes = self.twoDigitsNumber(self.setMinutes());
  var seconds = self.twoDigitsNumber(self.setSeconds());
  return [minutes, seconds];
};

// Chronometer.prototype.setMilliseconds = function () {

// };

//----- STOP

Chronometer.prototype.stopClick = function() {
  var self = this;
  clearInterval(self.intervalId);
};

Chronometer.prototype.resetClick = function() {
  var self = this;
  self.currentTime = 0;
};

Chronometer.prototype.splitClick = function() {
  var self = this;
};
