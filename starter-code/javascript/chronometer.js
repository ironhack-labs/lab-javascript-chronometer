// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

 Chronometer.prototype.startClick = function() {
    var that = this;
    this.intervalId = setInterval(function() {
        that.currentTime++;
        that.setTime();
      }, 10);
 };

 Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 6000);
 };

 Chronometer.prototype.setSeconds = function () {
    return Math.floor(this.currentTime / 100);
 };

 Chronometer.prototype.twoDigitsNumber = function (value) {
     if (value < 10) {
         return "0" + String(value);
     } else {
         return String(value);
     }
 };

 Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    this.milliseconds = this.twoDigitsNumber(this.setMilliseconds());
 };

 Chronometer.prototype.setMilliseconds = function () {
    return this.currentTime % 100;
 };

 Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
 };

 Chronometer.prototype.splitClick = function () {
    return this.minutes +":"+this.seconds+":"+ this.milliseconds;
 };
