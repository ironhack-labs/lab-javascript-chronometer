 //Constructor
 function Chronometer() {
   this.currentTime = 0;
   this.intervalId = 0;
   this.minutes = "00";
   this.seconds = "00";
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function() {
    this.currentTime++;
    this.setTime();
  }.bind(this), 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime - (this.setMinutes() * 60);
};

Chronometer.prototype.twoDigitsNumber = function (time) {
  if (time.toString().length == 1) {
    return "0" + time;
  } else {
    return time.toString();
  }
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {
//  return 
// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
 this.currentTime = 0;
 this.setTime();
};

// Chronometer.prototype.splitClick = function () {

// };
