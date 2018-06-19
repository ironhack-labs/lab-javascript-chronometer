// Constructor
function Chronometer() {
  this.currentTime=0;
  this.intervalId=0;
}
Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervalId = setInterval (function (){
    that.currentTime+=1;
    that.setTime();
  }, 1000);
};
Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60);
};
Chronometer.prototype.setSeconds = function () {
      return this.currentTime % 60;
 };
Chronometer.prototype.twoDigitsNumber = function (value) {
  var twoDigitNumber="";
  if (value<=9){
    twoDigitNumber="0"+value;
  } else {
    twoDigitNumber=value.toString();
  } 
  return twoDigitNumber;
 };
Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  printTime(minutes, seconds);
};
//Chronometer.prototype.setMilliseconds = function () {
//};
Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};
Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};
// Chronometer.prototype.splitClick = function () {
// };
