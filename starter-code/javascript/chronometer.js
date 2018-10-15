
class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick() {
        this.intervalId = setInterval(() => {
            console.log("intervalID:", this.intervalId);
            this.currentTime++;
            console.log(this.currentTime)
            this.setTime();
            printTime();
        }, 10)
    }

    setMinutes() {
        return Math.floor(this.currentTime/6000)
    }
    setSeconds() {
        return Math.floor(this.currentTime/100) % 60
    }

    setCentiseconds() {
        return this.currentTime % 100
    }
    
    twoDigitsNumber(n) {
        if (n<10) {
            return "0" + n
        } else {
            return n.toString()
        }
    }
    setTime() {
        var minutes = this.twoDigitsNumber(this.setMinutes())
        var seconds = this.twoDigitsNumber(this.setSeconds())
        var centiseconds = this.twoDigitsNumber(this.setCentiseconds())
        return [minutes, seconds, centiseconds]

    }
    stopClick() {
        clearInterval(this.intervalId)
        this.intervalId = 0;
    }
    resetClick() {
        this.currentTime = 0;
        printTime();
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
