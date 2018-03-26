// Constructor


function Chronometer() {
    this.currentTime = 0,
    this.intervalId = 0
}

Chronometer.prototype.startClick = function () {
    
        var that = this
        setInterval (function(){
            that.currentTime ++;
        },1000)

    };

Chronometer.prototype.setMinutes = function () {
    return parseInt(this.currentTime/60);
 };

Chronometer.prototype.setSeconds = function () {
  return Math.round(this.currentTime - 60 * this.setMinutes())
 };

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
