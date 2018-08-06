// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(
    function() {
      this.currentTime++;
      this.setTime();
      console.log(this.currentTime);
    }.bind(this),
    1
  );
};

Chronometer.prototype.setMinutes = function() {
  var minutes = Math.floor(this.currentTime / 60000);
  return minutes;
};

Chronometer.prototype.setSeconds = function() {
  var seconds = Math.floor(this.currentTime / 1000);
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function(time) {
  if (time < 10) {
    return "0" + time;
  }
  return time.toString();
};

Chronometer.prototype.setTime = function() {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
  this.milliseconds = this.twoDigitsNumber(this.setMilliseconds());
};

Chronometer.prototype.setMilliseconds = function() {
  var miliseconds = this.currentTime % 1000;
  return miliseconds;
};

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
  console.log("debug", this.currentTime);
  this.currentTime = 0;
  console.log("debug", this.currentTime);
};

// Chronometer.prototype.splitClick = function () {

// };
