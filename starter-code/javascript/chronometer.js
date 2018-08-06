
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = "";
    minutes = "00"
    seconds = "00"
 }


 Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function() {
      that.currentTime++;
      that.setTime();
      printTime();
     }, 1000);
 }

 
 Chronometer.prototype.setMinutes = function () {
   var minutes = 0;
      minutes = Math.floor(this.currentTime / 60)
      return minutes;
 };

 Chronometer.prototype.setSeconds = function () {
    var seconds = this.currentTime;
    seconds = this.currentTime % 60;
    return seconds;
};

 Chronometer.prototype.twoDigitsNumber = function (number) {
    return (number < 10 ? '0' : '') + number
 };

 Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  this.minutes = minutes;
  this.seconds = seconds;
 };


Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.minutes = "00";
  this.seconds = "00";
  printTime();
 };


// Chronometer.prototype.splitClick = function () {

// };


// Chronometer.prototype.setMilliseconds = function () {

// };
