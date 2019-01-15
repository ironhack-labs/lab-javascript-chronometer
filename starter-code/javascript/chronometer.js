// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}
Chronometer.prototype.startClick = function() {
  var that = this;
  that.intervalId = setInterval(function() {
    that.currentTime += 1;
    that.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function() {
  return Math.floor(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function(value) {
  var resultado = value.toString();
  if (value < 10) {
    resultado = "0" + resultado;
  }
  return resultado;
};

Chronometer.prototype.setTime = function() {
  return this.twoDigitsNumber(this.setMinutes()) + this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
  this.intervalId = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
