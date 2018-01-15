// Constructor
function Chronometer() {
this.currentTime = 0;
this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var that=this;
  this.intervalId = setInterval(function () {
  that.currentTime ++;
  that.setTime();
  }, 1000)

 };

 Chronometer.prototype.setMinutes = function () {
   return Math.trunc(this.currentTime / 60)
};

 Chronometer.prototype.setSeconds = function () {
   return this.currentTime % 60
  };

 Chronometer.prototype.twoDigitsNumber = function (number) {
  if (number > 9) {
    return number.toString();
   }
   else {
     return "0" + number.toString();}
 };

Chronometer.prototype.setTime = function () {
this.minutes = this.twoDigitsNumber(this.setMinutes());
this.seconds = this.twoDigitsNumber(this.setSeconds());
};
// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
return this.currentTime=0
 };

// Chronometer.prototype.splitClick = function () {

// };
