// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.minutes ="";
  this.seconds ="";
 }

Chronometer.prototype.startClick = function () {
 this.intervalId = setInterval(function(){
   this.setTime();
  
   this.currentTime++;
  }.bind(this),
   10);
 };


Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/6000)
 };

Chronometer.prototype.setSeconds = function () {
  return this.currentTime%6000
 };

Chronometer.prototype.twoDigitsNumber = function (time) {
  var timeString = time.toString()
  if (timeString.length==2){
    return timeString;
  } else if (timeString.length==1){
    return '0' + timeString;
  } else {return ""};
 };

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    this.milliseconds= this.twoDigitsNumber(this.setMilliseconds())
    return this.minutes + this.seconds + this.milliseconds;
 };

Chronometer.prototype.setMilliseconds = function () {
  return (this.currentTime/10)%100;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
 };

Chronometer.prototype.resetClick = function () {
  this.currentTime=0;
  this.setTime();
 };

Chronometer.prototype.splitClick = function () {
  
 };
