function Chronometer(){
  this.currentTime = 0;
  this.intervalId = 0;
};

// function Chronometer() {

// }
var interval = 
Chronometer.prototype.startClick = function () {
  var p = this;
  var interval1 = setInterval(function(){
    p.setMinutes();
    this.intervalId = interval;
    return p.currentTime++;
  }, 1000);
};



Chronometer.prototype.setMinutes = function () {
  this.currentMin = 0;
  if(this.currentTime > 59) this.currentMin = Math.floor(this.currentTime/60);
  return this.currentMin
};

Chronometer.prototype.setSeconds = function () {
  if(this.currentTime > 59) return Math.floor(this.currentTime%60);
  return this.currentTime
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  var digits = (number < 10) ? ('0' + number) : number
  return digits;
};

Chronometer.prototype.setTime = function () {
  var min = this.twoDigitsNumber(this.setMinutes());
  var sec = this.twoDigitsNumber(this.setSeconds());
  var time = min + ':' + sec;
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(interval);  
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
