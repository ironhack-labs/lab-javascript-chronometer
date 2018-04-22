// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

 Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(()=>{
    this.currentTime++;
    this.setTime();
  }, 1000);
 };

 Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60);
 };

 Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime%60);
 };

 Chronometer.prototype.twoDigitsNumber = function (numValue) {
  var number;
  if(numValue.toString().length < 2){
    number = "0" + numValue.toString();
  } else {
    number = numValue.toString();
  }
  return number;
};

 Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
  return [this.minutes, this.seconds];
 };

 Chronometer.prototype.setMilliseconds = function () {
  this.millisconds = this.currentTime / 1000;
 };

 Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
 };

//  Chronometer.prototype.splitClick = function () {

//  };

