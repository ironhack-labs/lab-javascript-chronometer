// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = "";
  
}

var minutes;
var seconds;
var miliseconds;

Chronometer.prototype.startClick = function () {

  this.intervalId = setInterval((function () {
      this.currentTime++;
      this.setTime();
      printTime();
  }).bind(this), 10);
};


Chronometer.prototype.setMinutes = function () {
  return (this.currentTime - this.currentTime % 6000) / 6000;
};

Chronometer.prototype.setSeconds = function () {
  return (this.currentTime - (this.currentTime - this.currentTime % 6000) - this.currentTime % 100)/100;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  if (number.toString().length >= 2) {
      return number.toString();
  } else if (number.toString().length === 1) {
      return "0" + number.toString();
  }
};

Chronometer.prototype.setTime = function () {
  minutes = this.twoDigitsNumber(this.setMinutes());
  seconds = this.twoDigitsNumber(this.setSeconds());
  miliseconds = this.twoDigitsNumber(this.setMilliseconds());

};

Chronometer.prototype.setMilliseconds = function () {
  return this.currentTime-this.setSeconds()*100-this.setMinutes()*6000;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime=0;
};

Chronometer.prototype.splitClick = function () {
  return minutes + ":" + seconds + ":" + miliseconds;
};