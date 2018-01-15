// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var that = this;
   this.intervalId = setInterval(function(){
    that.currentTime += 1;
    printTime();
  },1000);
};

Chronometer.prototype.setMinutes = function () {
  var minutes = 0;
  minutes = this.currentTime / 60;
  return Math.floor(minutes);
};

Chronometer.prototype.setSeconds = function () {
  var seconds = 0;
  seconds = this.currentTime % 60;
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  return (number < 10 ? '0' : '') + number;
};

Chronometer.prototype.setTime = function () {
  var time ="00:00";
  time = this.twoDigitsNumber(this.setMinutes(this.currentTime)) + ":" + this.twoDigitsNumber(this.setSeconds(this.currentTime));
  return time;
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
