// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = null;
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(() => {
    this.currentTime += 1;
  }, 10);
};

Chronometer.prototype.setMinutes = function() {
  let secondes = Math.floor(this.currentTime / 60);
  let minutes = Math.floor(secondes / 60);
  return minutes;
};

Chronometer.prototype.setSeconds = function() {
  let secondes = Math.floor(this.currentTime / 60);
  return secondes;
};

Chronometer.prototype.twoDigitsNumber = function(e) {
  e = e.toString();
  if (e.length < 2) {
    return `0${e}`;
  } else {
    return `${e}`;
  }
};

// Chronometer.prototype.setTime = function () {

// };

Chronometer.prototype.setMilliseconds = function() {
  let secondes = Math.floor(this.currentTime / 60);
  var milsec = (this.currentTime / 60 - secondes) * 60;
  milsec = Math.floor(milsec);
  return milsec;
};

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
