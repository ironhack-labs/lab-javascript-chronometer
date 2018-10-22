//Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.minutes = 0;
  this.seconds = 0;
}

Chronometer.prototype.startClick = function () {
  let a = this;
  this.intervalId = setInterval(function() { a.currentTime += 1; a.setTime(); printTime(); }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  return parseInt(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return parseInt(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function (a) {
  if(a <= 9)  
    return '0' + a;
  else
    return String(a);
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
  this.intervalId = 0;
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
