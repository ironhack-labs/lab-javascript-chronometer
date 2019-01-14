// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  var that = this;

  this.intervalId = setInterval(function() {
    that.setTime();
    that.currentTime += 1;
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  var minutes = Math.floor(this.currentTime / 60);
  return minutes;
};

Chronometer.prototype.setSeconds = function() {
  var seconds = this.currentTime % 60;
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
};

Chronometer.prototype.setTime = function() {
  var minutes = this.twoDigitsNumber(this.setMinutes);
  var seconds = this.twoDigitsNumber(this.setSeconds);
};

 Chronometer.prototype.setMilliseconds = function () {

 };

 Chronometer.prototype.stopClick = function () {
return clearInterval(this.intervalId)
 };

 Chronometer.prototype.resetClick = function () {
return this.currentTime = 0;
 };

// Chronometer.prototype.splitClick = function () {

// };
