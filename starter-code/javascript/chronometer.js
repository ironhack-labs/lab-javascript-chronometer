 //Constructor
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
 }

 Chronometer.prototype.startClick = function () {
    var that = this;
    intervalId = setInterval (function (){
    that.currentTime ++;
    },1000);
    return intervalId
 };

 Chronometer.prototype.setMinutes = function () {
    var minutes = Math.floor (this.currentTime/60)
    return minutes;
 };

 Chronometer.prototype.setSeconds = function () {
    var seconds = this.currentTime%60; 
    //var seconds = this.currentTime - (minutes*60)
    return seconds;
 };

 Chronometer.prototype.twoDigitsNumber = function (time) {
   if (time <= 9){
      return "0" + time
   } else {
      return time.string
   }
 };

 Chronometer.prototype.setTime = function () {
   var minutes = twoDigitsNumber(setMinutes());
   var seconds = twoDigitsNumber (seconds());
   return this.second; 
 };

 Chronometer.prototype.setMilliseconds = function () {
   return parseInt(this.currentTime);
 };

 Chronometer.prototype.stopClick = function () {
   clearInterval(this.intervalId);
   this.intervalId=0;
 };

 Chronometer.prototype.resetClick = function () {
   this.currentTime = 0;
 };

 Chronometer.prototype.splitClick = function () {

 };
