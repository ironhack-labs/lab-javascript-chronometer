//Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.minutes = 0;
  this.seconds = 0;
  this.miliseconds = 0;
}

Chronometer.prototype.startClick = function() {
  let a = this;
  this.intervalId = setInterval(function() {
    a.currentTime += 1;
    a.setTime();
    printTime();
  }, 10);
};

Chronometer.prototype.setMinutes = function() {
  return parseInt(this.currentTime / 6000)%60;
};

Chronometer.prototype.setSeconds = function() {
  return parseInt(this.currentTime / 100) % 60;
};

Chronometer.prototype.twoDigitsNumber = function(a) {
  if (a <= 9) return "0" + a;
  else return String(a);
};

Chronometer.prototype.setTime = function() {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
  this.miliseconds =  this.twoDigitsNumber(this.setMilliseconds());
};

Chronometer.prototype.setMilliseconds = function () {
  return parseInt(this.currentTime);
};

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
  this.intervalId = 0;
};

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {
  return String(this.minutes + ':' + this.seconds + ':' + this.miliseconds);
};
