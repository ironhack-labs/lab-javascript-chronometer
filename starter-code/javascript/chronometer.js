// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(function () {
        this.currentTime++;
        this.setTime();
    }.bind(this), 1000);
}

Chronometer.prototype.setMinutes = function () {
    var minutes =  Math.floor(this.currentTime / 60);
    return minutes;
};

Chronometer.prototype.setSeconds = function () {
    var seconds = this.currentTime % 60;
    return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (timing) {
        if ( timing < 10) {
            return '0' + timing.toString();
        } else {
            return timing.toString();
        }
        
    };

Chronometer.prototype.setTime = function () {
    return this.setMinutes() + this.setSeconds();
};

/* Chronometer.prototype.setMilliseconds = function () {
    return this.currentTime / 100
}; */

Chronometer.prototype.stopClick = function () {
    clearInterval()
 };

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
 };

// Chronometer.prototype.splitClick = function () {

// };
