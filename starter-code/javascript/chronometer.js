// Constructor
 function Chronometer() {
   this.currentTime = 0;
   this.intervalId = 0;
   this.min = 0;
   this.sec = 0;
 }

 /*
 function TimeHandler () {
   currentTime += 1;
 }
 */
 Chronometer.prototype.timerHandler = function () {
   this.currentTime += 1; //seconds
   console.log("Incrementing current time... new val :" + this.currentTime);
   this.setTime();
 }
 Chronometer.prototype.startClick = function () {
   this.intervalId = setInterval (this.timerHandler.bind(this), 1000);
   
 };
 
 Chronometer.prototype.setMinutes = function (currentTime) {
  this.min = Math.floor(this.currentTime / 60);
  return this.min;
  }
 
 Chronometer.prototype.setSeconds = function (currenTime) { 
  this.sec = this.currentTime % 60;
  return this.sec;
  }

 Chronometer.prototype.twoDigitsNumber = function (number) {
   if (number < 10) {
     return "0" + number;
   }
   else 
     return "" + number;
 };

 Chronometer.prototype.setTime = function (currenTime) {
   var minutes = this.twoDigitsNumber(this.setMinutes(this.currentTime));
   var seconds = this.twoDigitsNumber(this.setMinutes(this.currentTime));
   return minutes + seconds;
 };
 
 //Chronometer.prototype.setMilliseconds = function () {
   //this.currentTime = setInterval (this.timerHandler.bind(this),1000);
 //};


 Chronometer.prototype.stopClick = function () {
  if (-1 != this.intervalId) {
    clearInterval(this.intervalId);
    this.intervalId = -1;
}
};
 Chronometer.prototype.resetClick = function () {
 };
 Chronometer.prototype.splitClick = function () {
 };