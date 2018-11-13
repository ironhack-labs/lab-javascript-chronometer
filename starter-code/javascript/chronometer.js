// Constructor
function Chronometer() {
  this.currentTime = 0; //Cambiar
  this.intervalId = null;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(() => { //Lexically bind
    this.currentTime++;
    this.setTime();
  }, 10);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / (60000/10));
};

Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime / (1000/10));
};

Chronometer.prototype.setMilliseconds = function () {
  return Math.floor(this.currentTime/10)*1
}

Chronometer.prototype.twoDigitsNumber = function (num) {
  return num.toString().padStart(2, '0');
};


Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  var milliseconds = this.twoDigitsNumber(this.setMilliseconds());
  return minutes + ":" + seconds + "." + milliseconds; //Retomar
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
