// Constructor
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
 }

 Chronometer.prototype.startClick = function () {
    var that = this
    that.stopClick(that.intervalId);
    this.intervalId = setInterval (function(){
        that.setTime();
        that.currentTime += 1;
     }, 1000);
 }

 Chronometer.prototype.setMinutes = function () {
  
  return Math.floor(this.currentTime/60);
 };

 Chronometer.prototype.setSeconds = function () {
    return this.currentTime -= this.setMinutes()*60;;
 };

 Chronometer.prototype.twoDigitsNumber = function (value) {
  if (value > 9) {
      return value.toString()
  }
  else {
     return ("0" + value)
  }
 };

 Chronometer.prototype.setTime = function () {
  this.seconds = this.twoDigitsNumber(this.setSeconds());
  this.minutes = this.twoDigitsNumber(this.setMinutes());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function (interval) {
    clearInterval(interval);

 };

 Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
 };

// Chronometer.prototype.splitClick = function () {

// };
