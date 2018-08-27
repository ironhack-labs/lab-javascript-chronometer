// Constructor
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.ms = 0;
 }

 Chronometer.prototype.startClick = function () {
    var self = this;
    
    this.intervalId = setInterval(function () { 
            self.currentTime += 1;
            self.setTime();
        }, 1000);
 };

Chronometer.prototype.setMinutes = function () {
    var self = this;
    var minutes = self.currentTime / 60;
    return Math.floor(minutes);
 };

 Chronometer.prototype.setSeconds = function () {
    var self = this;
    var remaining = (self.currentTime / 60) % 1;
    remaining *= 60;
    var seconds = Math.round(remaining);
    return Math.round(seconds) ;
 };

 Chronometer.prototype.twoDigitsNumber = function (a) {
    return (a < 10 ? '0' : '') + a;
 };

 Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds()); 
    
    printTime();
 };



Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);

};

 Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.seconds = "00";
    this.minutes = "00";
    this.ms = "00";
    printTime();

 };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
