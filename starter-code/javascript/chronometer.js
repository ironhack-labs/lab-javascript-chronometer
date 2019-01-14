// Constructor

 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
     
 }

 Chronometer.prototype.startClick = function () {
     let self = this;
     this.intervalId = setInterval(function() {
        self.currentTime += 1; 
        self.setTime();
    }, 1000)

 };

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime/60);
};

 Chronometer.prototype.setSeconds = function () {
    return this.currentTime % 60;
 };

 Chronometer.prototype.twoDigitsNumber = function (number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number.toString();
    }
 };

 Chronometer.prototype.setTime = function () {
     let minutes = this.twoDigitsNumber(this.setMinutes());
     let seconds = this.twoDigitsNumber(this.setSeconds());
     return [minutes, seconds];
 };

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
    clearInterval(this.intervalId);
   this.currentTime = 0;
 } ;

// Chronometer.prototype.splitClick = function () {

// };
