// Constructor

class Chronometer{
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }

    startClick() {
        this.intervalId = setInterval(() => {
            console.log(this.intervalId);
            this.currentTime++;
            this.setTime();
        }, 1000); 
    }

    setMinutes() {
        return Math.floor(this.currentTime / 60)
    }

    setSeconds() {
        return Math.floor(this.currentTime % 60)
    }

    twoDigitsNumber(value) { 
    return (this.setMinutes() < 10 ? "0" : "") +  parseInt(value) ;
    }


    setTime() {
        var seconds =  this.setSeconds()
        var minutes =  this.setMinutes();
        if(minutes === 0 || seconds === 0) {
            this.twoDigitsNumber();
        }
    }

    setMilliseconds() {
    }

    stopClick() {
        //setTime().clear(); 
        clearInterval;
    }

    resetClick() {
        this.currentTime = 0;
    }

    splitClick() {

    }

}


// function Chronometer() {

// }

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
