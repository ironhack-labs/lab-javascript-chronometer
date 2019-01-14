// Constructor
class Chronometer {
    constructor() {
        this.currentTime = 0,
        this.intervalId = 0
        }
    startClick () {
        var that = this
        this.intervalId = setInterval (function () {
            that.currentTime++
            that.setTime()
        },1000)
    }
    setMinutes () {
        return parseInt(this.currentTime/60)
    }
    setSeconds () {
        return this.currentTime-(this.setMinutes()*60)
    }
    twoDigitsNumber(setMinutes, setSeconds) {
        if (setMinutes <= 9) {
            return '0'+setMinutes
        } else if (setMinutes > 9) {
            return ''+setMinutes
        }
        if (setSeconds <= 9) {
            return '0'+setSeconds
        } else if (setSeconds > 9){
            return ''+setSeconds
        }
    }
    setTime () {
        var minutes = this.setMinutes()
        var seconds = this.setSeconds()
    }
    stopClick () {
        clearInterval(this.intervalId)
    }
    resetClick () {
        this.currentTime = 0
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
