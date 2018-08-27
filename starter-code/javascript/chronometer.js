// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
 }

Chronometer.prototype.startClick = function () {
 this.intervalId = setInterval(function(){
   this.currentTime++;
  }.bind(this),
   1000)
 };
//clearInterval(this.intervalId)

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60)
 };

Chronometer.prototype.setSeconds = function () {
  return this.currentTime%60
 };

Chronometer.prototype.twoDigitsNumber = function (time) {
  timeString = time.toString()
  if (timeString.length==2){
    return timeString;
  } else if (timeString.length==1){
    return '0' + timeString;
  };
 };

Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
