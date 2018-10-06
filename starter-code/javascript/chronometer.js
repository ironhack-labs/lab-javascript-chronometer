// Constructor
function Chronometer() {
this.currentTime = 0;
this.intervalId = -1 ;
}


Chronometer.prototype.timeHandler = function() {
    this.currentTime += 1;
    this.setTime();
};

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval (this.timeHandler.bind(this), 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  if (value<10) {
      return String("0"+value);
  }
  else {return String(value)}
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
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
