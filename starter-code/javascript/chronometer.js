// Constructor

function Chronometer() {
  this.currentTime = 0;
  this.intervalId = "";
  this.miliSeconds = 0;
}

Chronometer.prototype.startClick = function () {
  var self = this;
  var ourIntervalId = setInterval(function(){
    self.currentTime += 1;
    self.setTime();
  },1000);
  
  this.intervalId = ourIntervalId;
  
};


Chronometer.prototype.setMinutes = function () {
  var minutes = 0;
  if (this.currentTime !== 0) {
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
  } else {
    return minutes;
  }
};

Chronometer.prototype.setSeconds = function () {
  var seconds = this.currentTime - this.setMinutes()*60;
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  var twoDigits = number.toString();
  if(twoDigits.length < 2){
    return "0" + number;
  }
  return twoDigits;
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  printTime(minutes, seconds);
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
