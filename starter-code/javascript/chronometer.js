// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}


Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(() => {
    this.currentTime++;
    console.log(this.currentTime);
  }, 1000);
};

var curent = new Chronometer();
console.log(curent.startClick())

Chronometer.prototype.setMinutes = function () {

};

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