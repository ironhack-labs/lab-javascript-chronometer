// Constructor
function Chronometer() {
  this.currentTime  = 0;
  this.intervalId = 0;
  this.seconds = 0;
  this.minutes = 0;
  // this.milliseconds = 0;
}

Chronometer.prototype.startClick = function () {
  var that = this; //declaring a variable 
  this.intervalId = setInterval(function(){
    that.currentTime++ //same as Chronometer.currentTime++
    that.setTime();
  },1000)
};

Chronometer.prototype.setMinutes = function () {
 return Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime % 60)
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  return String(value < 10 ? '0' : '') + value;
  
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.setSeconds();
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {

};
