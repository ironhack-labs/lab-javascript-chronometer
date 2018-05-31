/// Constructor
function Chronometer() {
this.currentTime = 0; // represents the number of seconds
this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
var chronometer = this;
// we need to store our current object into sth else, so we can use it later!
// if a pass a lambda into the interval function this is not going to change
this.intervalId = setInterval(function() {
  chronometer.setTime();
  chronometer.currentTime++;
}, 1000);
};

Chronometer.prototype.setMinutes = function() {
return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function() {
return Math.floor(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function(number) {
if (number < 10) return "0" + number;
return number.toString();
};

Chronometer.prototype.setTime = function() {};

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