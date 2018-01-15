// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervalId = setInterval(function(){
    parseInt(that.currentTime++);
    that.setTime();
  },1000);
};

var minutes;
var seconds;
Chronometer.prototype.setMinutes = function () {
  minutes = parseInt(this.currentTime/60);
  return minutes;
};

Chronometer.prototype.setSeconds = function () {
  seconds = this.currentTime - parseInt(this.currentTime / 60) * 60;
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  var twoDigits = '00';
  if (number < 10){
    twoDigits = '0' + number;
  } else if (number === 15) {
    twoDigits = '15';
  }
  return twoDigits;
};

Chronometer.prototype.setTime = function () {
  
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};
