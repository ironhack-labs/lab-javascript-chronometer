// Constructor
 function Chronometer() {
   this.currentTime = 0;
   this.intervalId = 0;
   this.min = 0;
 }

 /*
 function TimeHandler () {
   currentTime += 1;
 }
 */
 Chronometer.prototype.timerHandler = function () {
   this.currentTime += 1; //seconds
   console.log("Incrementing current time... new val :" + this.currentTime);
 }
 Chronometer.prototype.startClick = function () {
   this.intervalId = setInterval (this.timerHandler.bind(this), 1000);
 };
 Chronometer.prototype.setMinutes = function (currentTime) {
  var currentMin = Math.floor(this.currentTime % 60000); 
 };
 
 Chronometer.prototype.setSeconds = function () { 
  
  }

   };

 Chronometer.prototype.twoDigitsNumber = function () {

 };
 Chronometer.prototype.setTime = function () {
 };
 Chronometer.prototype.setMilliseconds = function () {
   //this.currentTime = setInterval (this.timerHandler.bind(this),1000);

 };
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