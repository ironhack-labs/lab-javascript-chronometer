// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 1000;

}

Chronometer.prototype.startClick = function (currentTime, intervalId) {
  var time = this.currentTime;
  var interval = setInterval(function() {
     time++;
     console.log(time);
  },1000)

  this.currentTime = time;

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

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
