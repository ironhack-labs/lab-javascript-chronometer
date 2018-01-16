'use strict'

function Chronometer(){
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var self = this;

    self.intervalId = window.setInterval(function() {
        self.currentTime = self.currentTime + 1;
    },1000);
};

Chronometer.prototype.setMinutes = function () {
    var self = this;
    self.currentTime = Math.floor(self.currentTime/60);
    return self.currentTime;
};

Chronometer.prototype.setSeconds = function () {
    var self = this;
    return self.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    var self = this;
    if (number < 10) {
        return '0' + number;
    } 
    return String(number);
};

Chronometer.prototype.setTime = function () {

};

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
