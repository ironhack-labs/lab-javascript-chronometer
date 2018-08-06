// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervalId = setInterval(function() {
    that.currentTime += 1;
    that.setTime()
    // console.log(that.currentTime)
  }, 10)
};

Chronometer.prototype.setMinutes = function () {
  var minutes = 0;
  minutes = Math.floor(this.currentTime / 6000);
  // console.log(minutes)
  return minutes;
};

Chronometer.prototype.setSeconds = function () {
  var seconds = Math.floor(this.currentTime / 100) 
  return seconds % 60;
};

Chronometer.prototype.twoDigitsNumber = function (num) {
  if (num < 10) {
    return '0' + num
  } else {
    return num.toString()
  }
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes);
  var setSeconds = this.twoDigitsNumber(this.setSeconds);
};

Chronometer.prototype.setMilliseconds = function () {
  return this.currentTime % 100;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
