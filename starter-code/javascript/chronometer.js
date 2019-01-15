// Constructor

function Chronometer() {
  this.currentTime = 0
  this.intervalId = 0

}

Chronometer.prototype.startClick = function () {
  var that = this
   that.intervalId = setInterval(function(){
      that.setTime()
      that.currentTime++
    }, 1000)
  
};

Chronometer.prototype.setMinutes = function () {
  return parseInt(this.currentTime/60)
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime%60
};

Chronometer.prototype.twoDigitsNumber = function (n) {
  n = n.toString()
  if(n.length < 2) {
    n = "0" + n
  }
  return n

};

Chronometer.prototype.setTime = function (minutes, seconds) {
  var minutes = this.twoDigitsNumber(this.setMinutes) 
  var seconds = this.twoDigitsNumber(this.setSeconds)
  return minutes, seconds
};  

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
  // this.currentTime = 0
};

// Chronometer.prototype.splitClick = function () {

// };
