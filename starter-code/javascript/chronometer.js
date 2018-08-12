// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function(){
    this.currentTime++;
    printTime();
  }.bind(this), 1000)
};

// Chronometer.prototype.setMinutes = function () {

// };

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  this.clearInterval(this.currentTime)
};

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
