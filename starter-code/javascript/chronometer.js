// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 1;    
}

Chronometer.prototype.startClick = function () {
    setInterval(() => {
        this.currentTime = this.currentTime + 1;
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    minutes = this.currentTime / 60;
    return Math.floor(minutes)
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
