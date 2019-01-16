  // Constructor
 function Chronometer() {
 this.currentTime = 0;
 this.intervalId = "";
 }

 Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function() {
    this.setTime();
   return this.currentTime++
  }.bind(this), 1000);

 };

 Chronometer.prototype.setMinutes = function () {
   return Math.floor(this.currentTime / 60);
 };

 Chronometer.prototype.setSeconds = function () {
  return Math.round(this.currentTime % 60);

 };

 Chronometer.prototype.twoDigitsNumber = function (value) {
  if (value < 10){
    return "0" + value;
  } else {
    return "" + value;
  }
 };

 Chronometer.prototype.setTime = function () {
  this.twoDigitsNumber(this.setMinutes());
  this.twoDigitsNumber(this.setSeconds());
 };


 Chronometer.prototype.setMilliseconds = function () {

 };

 Chronometer.prototype.stopClick = function () {
    clearInterval()
 };

 Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
 };

 Chronometer.prototype.splitClick = function () {

 };
