// Constructor

class Chronometer { 
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick() {
        var intervalId = setInterval (function() {
            this.currentTime = this.currentTime + 1
            this.setTime()
        }.bind(this), 1000);

    }   

    setMinutes() {
        var minTime = this.currentTime/60 
        return Number(minTime.toFixed(0));
    }

    setSeconds() {
        var remainSec = this.currentTime % 60;
        return remainSec;
    }

    twoDigitsNumber(n) {
        if (n < 10) {
            n = ("0" + n)
        }
        return String(n);
    }

    setTime() {
        
        var minutes =  this.twoDigitsNumber(this.setMinutes());
        var seconds = this.twoDigitsNumber(this.setSeconds());
        
        return [minutes, seconds];
    }

    stopClick() {
        clearInterval(this.intervalId);
    }

    resetClick() {
        this.currentTime = 0;
    }

    splitClick() {

    }
} 
// Chronometer.prototype.startClick = function () {

// };

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
