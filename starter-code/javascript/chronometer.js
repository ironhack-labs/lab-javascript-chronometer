// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 1000;
}

Chronometer.prototype.startClick = function () {
  var that = this;
  setInterval(function(){
    console.log(that.currentTime);
    parseInt(that.currentTime++);
  },that.intervalId);
}

var minutes;
var seconds;
Chronometer.prototype.setMinutes = function () {
  minutes = parseInt(this.currentTime/60);
  return minutes;
};

Chronometer.prototype.setSeconds = function () {
  var secondsFloat = this.currentTime/60; 
  seconds = parseInt((secondsFloat % 1)*60);
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  var twoDigits = '00';
  if (number < 10){
    twoDigits = '0'+number;
  } else if (number === 15) {
    twoDigits = '15';
  }
  return twoDigits;
};

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
