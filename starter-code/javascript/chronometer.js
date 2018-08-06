
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = "";
    minutes = "00"
    seconds = "00"
    milliSeconds = "00"
 }


 Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function() {
      that.currentTime++;
      that.setTime();
      printTime();
     }, 10);
 }

 
 Chronometer.prototype.setMinutes = function () {
   var minutes = 0;
      minutes = Math.floor(this.currentTime / 6000);
      return minutes;
 };

 Chronometer.prototype.setSeconds = function () {
    var seconds = this.currentTime;
    var minutes = this.setMinutes();
    seconds = this.currentTime / 100;
    if (seconds >= 60)
    {seconds = (this.currentTime / 100) - minutes*60};
    return seconds;
};

Chronometer.prototype.setMilliseconds = function () {
    var time = "" + this.currentTime;
    var i = time.length;
    var milliSeconds = 0;
    if (this.currentTime < 100) {milliSeconds = this.currentTime}
    else {milliSeconds = Number(time[i-2] + time[i-1])}
    return milliSeconds;
};

 Chronometer.prototype.twoDigitsNumber = function (number) {
    return (Math.floor(number) < 10 ? '0' : '') + Math.floor(number);
 };

 Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  var milliSeconds = this.twoDigitsNumber(this.setMilliseconds());
  this.minutes = minutes;
  this.seconds = seconds;
  this.milliSeconds = milliSeconds;
 };


Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.minutes = "00";
  this.seconds = "00";
  this.milliSeconds = "00"
  printTime();
 };


