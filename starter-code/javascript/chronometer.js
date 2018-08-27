// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.minutes = 0;
  this.seconds = 0;
};

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function(){
  this.currentTime++;
  this.setTime(); 
  printTime();
}.bind(this), 1000);
};

Chronometer.prototype.setMinutes = function () {
  this.minutes = this.currentTime / 60;
  return Math.floor(this.minutes);
};

 Chronometer.prototype.setSeconds = function () {
  this.seconds = this.currentTime % 60;
  return this.seconds
 };

 Chronometer.prototype.twoDigitsNumber = function (convertTime) {
  var stringTime = convertTime.toString();
  var splitTime = stringTime.split('').length;
  if (splitTime == 1) {
    return ("0" + stringTime);
  } else {
    return convertTime.toString();
  }
  };

 Chronometer.prototype.setTime = function () {
      this.minutes = this.twoDigitsNumber(this.setMinutes());
      this.seconds = this.twoDigitsNumber(this.setSeconds());
      return console.log(this.minutes, this.seconds)
    };

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
  this.currentTime = (0);
 };

// Chronometer.prototype.splitClick = function () {

// };
