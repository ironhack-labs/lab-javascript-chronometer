// Constructor
function Chronometer() {
  this.minutes = 0;
  this.second = 0;
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(
    function() {
      this.currentTime += 1;
      this.setTime();
      console.log("current time ", this.currentTime);
      console.log("current min ", this.minutes);
      console.log("current second ", this.seconds);
    }.bind(this),
    1000
  );
};

Chronometer.prototype.setMinutes = function() {
  return parseInt(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function() {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function(number) {
  if (number.toString().length === 1) {
    return "0" + number.toString();
  }
  return number.toString();
};

Chronometer.prototype.setTime = function() {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
  return (this.currentTime = 0);
};

// Chronometer.prototype.splitClick = function () {

// };
