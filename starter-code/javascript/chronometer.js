//Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

var Chrono = new Chronometer();

Chronometer.prototype.startClick = function() {
    this.intervalId = setInterval(function() {
            this.currentTime += 1
            this.setTime();
        }.bind(this),
        1000);
};

Chronometer.prototype.setMinutes = function() {
    var minute = parseInt(this.currentTime / 60);
    return minute;
};


Chronometer.prototype.setSeconds = function() {
    var second = this.currentTime % 60;
    return second;
};


Chronometer.prototype.twoDigitsNumber = function(number) {
    if (number < 10) {
        return number = '0' + number;
    } else {
        return number += '';
    }
};

Chronometer.prototype.setTime = function() {
    var seconds = this.twoDigitsNumber(this.setSeconds(this.currentTime));
    var minutes = this.twoDigitsNumber(this.setMinutes(this.currentTime));
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function() {
    clearInterval(this.intervalId);
};


Chronometer.prototype.resetClick = function() {
    this.currentTime = 0;
};

Chrono.startClick();
Chrono.setMinutes();
Chrono.setSeconds();
Chrono.twoDigitsNumber();
Chrono.setTime();
Chronometer.stopClick();
Chrono.resetClick();

// Chronometer.prototype.splitClick = function () {

// };