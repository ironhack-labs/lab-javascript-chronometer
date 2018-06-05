// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval (function(){
  this.currentTime +=1;
  } , 1000);
  return this.currentTime;
};


Chronometer.prototype.setMinutes = function () {
  if (this.currentTime > 60){
    var minutes = Math.floor(this.currentTime/60);
  } else {
    var minutes = 0;
  }
  return minutes;
};

Chronometer.prototype.setSeconds = function () {
  var seconds = this.currentTime % 60;
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  if (number<10){
    return "0"+ number.toString();
  } else {
    return number.toString();
  }
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
