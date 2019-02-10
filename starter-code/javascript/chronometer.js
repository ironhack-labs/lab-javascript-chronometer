// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var obj = this; // DGG: Para no perder la referencia del objeto
  
  obj.intervalId = setInterval (function () {
    obj.currentTime++;
    obj.setTime();
  }, 1000);  
};

Chronometer.prototype.setMinutes = function () {
  return Math.trunc( (this.currentTime / 60) );
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;  
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  if (value < 10) return ('0' + value)
  else return value.toString()
};

Chronometer.prototype.setTime = function () {
  var minutes = twoDigitsNumber(setMinutes());
  var seconds = twoDigitsNumber(setSeconds());
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

// Chronometer.prototype.splitClick = function () {

// };
