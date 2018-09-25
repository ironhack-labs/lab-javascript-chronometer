// Constructor
function Chronometer() {
this.currentTime = 0;
this.intervalId = 0;
 }

Chronometer.prototype.startClick = function () {
  //Chronometer.prototype.startClick = function () {
    that = this;
    this.intervalId = setInterval(function () {
    that.currentTime++;
    that.setTime()
  }, 1000);
  return that.currentTime;
  };


Chronometer.prototype.setMinutes = function () {
  var onlyMinutes = Math.floor(this.currentTime / 60);
  return onlyMinutes;
  };
  
  Chronometer.prototype.setSeconds = function () {
    var onlySeconds = Math.floor(this.currentTime % 60);  
    return onlySeconds;
  };

Chronometer.prototype.twoDigitsNumber = function (number) {
   if (number < 10) {
     return "0" + number.toString();
   } 
   else {
     return String(number);
   }
  };

Chronometer.prototype.setTime = function () {
var minutes = this.twoDigitsNumber(this.setMinutes())
var seconds = this.twoDigitsNumber(this.setSeconds());
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

// };

