
//Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

//method on "Chronometer"-constructor called startClick
Chronometer.prototype.startClick = function () {
var that = this;
this.intervalId = setInterval(function(){
  that.currentTime++ // Chronometer.currentTime++    that refers back up to Chronometer 
  //this.setTime()
  that.setTime();
}, 1000)
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60)
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60 
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  if (value < 10) {
    return "0" + value;
  }
  return value.toString();
};

Chronometer.prototype.setTime = function () {
  //this.minutes = this.twoDigitsNumber(this.setMinutes());
//this.seconds = this.twoDigitsNumber(this.setSeconds())
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
this.currentTime == 0
};

// Chronometer.prototype.splitClick = function () {

// };
