// Constructor
function Chronometer(currentTime, intervalId) {
  this.currentTime = currentTime;
  this.intervalId = intervalId;
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(() => {
    this.currentTime += 1;
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  let minutes = Math.floor(this.currentTime / 60);
  return minutes;
};

Chronometer.prototype.setSeconds = function() {
  let secondes = this.currentTime - Math.floor(this.currentTime / 60);
  return secondes;
};

Chronometer.prototype.twoDigitsNumber = function(e) {
  var e = e.toString();
  if (e.length < 2) {
    return `0${e}`;
  } else {
    return `${e}`;
  }
};

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
