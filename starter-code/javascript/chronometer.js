 function Chronometer() {
   this.currentTime = 0;
   this.intervalId = 0;
 }

 Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervalId = setInterval(function(){
  that.currentTime ++;
  that.setTime();
   }, 1000);
};

 Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60);
 };

 Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime%60); 
 };

Chronometer.prototype.twoDigitsNumber = function (value) {
    value = value.toString();
    if(value.length < 2) {
      value = "0" + value;
    }
    return value;
 };

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes);
    var seconds = this.twoDigitsNumber(this.setSeconds);
 };

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
 };

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
 };

// Chronometer.prototype.splitClick = function () {

// }
