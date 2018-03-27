// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = "";
}

Chronometer.prototype.startClick = function() {
  var that = this;
  this.intervalId = setInterval(function() {
    that.currentTime++;
    that.setTime();
  }, 10);
};

Chronometer.prototype.setMinutes = function() {
  var minutos = parseInt(this.currentTime / 100 / 60);
  return minutos % 60;
};

Chronometer.prototype.setSeconds = function() {
  var segundos = parseInt(this.currentTime / 100);
  return segundos % 60;
};

Chronometer.prototype.twoDigitsNumber = function(digitos2) {
  if (digitos2 < 10) {
    digitos2 = "0" + digitos2;
  }
  return digitos2.toString();
};

Chronometer.prototype.setTime = function() {
  this.twoDigitsNumber(chronometer.setSeconds);
  this.twoDigitsNumber(chronometer.setMinutes);
};

Chronometer.prototype.setMilliseconds = function() {
    return this.currentTime % 100;
};

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
};

Chronometer.prototype.splitClick = function() {};
