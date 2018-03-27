// Constructor
 function Chronometer() {
  this.currentTime=0;
  this.intervalId=0;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function() {
    this.currentTime++;
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  var minutes =Math.floor(this.currentTime/60 );
  return minutes;
};

 Chronometer.prototype.setSeconds = function () {
  var seconds = this.currentTime%60; 
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  return ('0'+number).slice(-2);
};

Chronometer.prototype.setTime = function () {

};

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
