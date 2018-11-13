// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.intervalIdMili = 0;
  this.minutes = "";
  this.seconds = "";
  this.milliseconds = 0;
}

 Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      this.setTime()
    }, 1000);

    this.intervalIdMili = setInterval(() => {
     this.milliseconds++;
     this.setMilliseconds();
   }, 1);
 };

 Chronometer.prototype.setMinutes = function () {
   return Math.floor(this.currentTime /60);
 };

 Chronometer.prototype.setSeconds = function () {
   return this.currentTime % 60;
 };

 Chronometer.prototype.setMilli = function () {
   return this.milliseconds % 100;
 };

 Chronometer.prototype.twoDigitsNumber = function (number) {
   return number < 10 ? ("0" + number) : number + "";
 };

 Chronometer.prototype.setTime = function () {
   this.minutes = this.twoDigitsNumber(this.setMinutes());
   this.seconds = this.twoDigitsNumber(this.setSeconds());
 };

 Chronometer.prototype.setMilliseconds = function () {
   this.milliseconds = this.setMilli();
 };

 Chronometer.prototype.stopClick = function () {
   clearInterval(this.intervalId);
   clearInterval(this.intervalIdMili);
 };

 Chronometer.prototype.resetClick = function () {
   this.currentTime = 0;
   this.milliseconds = 0;
 };

 Chronometer.prototype.splitClick = function () {
   return this.minutes + ":" + this.seconds + ":" + this.milliseconds;
 };
