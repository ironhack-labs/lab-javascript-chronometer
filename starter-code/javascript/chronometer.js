// Constructor
function Chronometer() {
  this.currentTime = 0; //Cambiar
  this.intervalId = null;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(() => { //Lexically bind
    this.currentTime++;
    this.setTime();
  }, 1);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/6000);
};

Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime/100) % 60;
};

Chronometer.prototype.twoDigitsNumber = function (num) {
  return num.toString().padStart(2, '0');
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  var milliseconds = this.twoDigitsNumber(this.setMilliseconds());
  return minutes + ":" + seconds + "." + milliseconds;
};

//Actually centiseconds, but whatever
Chronometer.prototype.setMilliseconds = function () {
  return this.currentTime % 100;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
