
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = "";
 }


 Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function() {
      that.currentTime++;
      that.setTime();
     }, 1000);
 }

 
 Chronometer.prototype.setMinutes = function () {
   var minutes = 0;
    if (this.currentTime > 60) {
      this.minutes = Math.floor(this.currentTime / 60)
    }
    return this.minutes;
 };

 Chronometer.prototype.setSeconds = function () {
  var seconds = this.currentTime;
  if (this.currentTime > 60) {
    this.seconds = this.currentTime -(this.setMinutes()*60)
  }
  return this.seconds;
};

 Chronometer.prototype.twoDigitsNumber = function (number) {
    return (number < 10 ? '0' : '') + number
 };

 Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
 };


Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
 };


// Chronometer.prototype.splitClick = function () {

// };


// Chronometer.prototype.setMilliseconds = function () {

// };
