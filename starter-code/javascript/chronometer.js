// Constructor
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


class Chronometer {
constructor(){
    this.currentTime = 0;
    this.intervalId = 0;
}

    startClick() {
            var _chronometer = this;
            this.intervalId = setInterval(function() {
                _chronometer.currentTime += 1;
            }, 1000);
    }   

    setMinutes() {
     return Math.floor(this.currentTime/60);
    }

    setSeconds() {
    return Math.floor (chronometer.currentTime%60)
    }

    twoDigitsNumber(number) {
if (number < 10){
    return '0' + number;
} else{
    return '' +number;
}
    }

    setTime() {
var minutes = this.setMinutes;
var seconds = this.setSeconds;


    }


    stopClick() {
clearInterval(this.intervalId)
    }

    resetClick() {

    }

    splitClick() {

    }
} 