'use strict';

// Constructor
function Chronometer() {
this.currentTime = 0;
this.intervalId = 0 ;

}

Chronometer.prototype.startClick = function () {
    var self = this;
    function currentTime (){
        self.currentTime += 1;
        self.setTime();
    };
    self.intervalId = window.setInterval(currentTime,1000);
};

Chronometer.prototype.setMinutes = function () {
    var self = this;
    var minutes = Math.floor(self.currentTime / 60);
    return minutes;
};

Chronometer.prototype.setSeconds = function () {
    var self = this;
    var seconds = Math.floor(self.currentTime % 60);
    return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (minSec) {
    var self = this;
    if (minSec > 9) {
        return "" + minSec;
    }
    else {
        return "0" + minSec;
    }
};

Chronometer.prototype.setTime = function () {
    var self = this;
    var minutes = self.twoDigitsNumber(self.setMinutes());
    var seconds = self.twoDigitsNumber(self.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  var self = this;
  window.clearInterval(self.intervalId);
};

Chronometer.prototype.resetClick = function () {
    var self = this;
    self.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

