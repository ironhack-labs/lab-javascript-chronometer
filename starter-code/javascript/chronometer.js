// Constructor
 function Chronometer() {
   this.currentTime = 0;
   this.intervalId = 0;
 }

 Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function(){
    this.currentTime ++;
    this.setTime();
  }.bind(this), 1000);
  return this.currentTime;
}

 Chronometer.prototype.setMinutes = function () {
  var minutes = this.currentTime;
  return Math.floor(minutes/60);
 };

 Chronometer.prototype.setSeconds = function () {
  var seconds = this.currentTime;
  return seconds%60;
 };

 Chronometer.prototype.twoDigitsNumber = function (number) {
  return ("0" + number).slice(-2); 
};

 Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
 };

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.startClick());
 };

 Chronometer.prototype.resetClick = function () {
  return this.currentTime = 0 ;
 };

// Chronometer.prototype.splitClick = function () {

// };
