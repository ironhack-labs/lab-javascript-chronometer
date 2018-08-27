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
    console.log(self.currentTime);
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

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

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
