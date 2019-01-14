//Constructor
function Chronometer() {
this.currentTime = 0;
this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var that = this
this.intervalId = setInterval(function() {
    that.setTime()
    that.currentTime++}, 1000)
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 60)
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime % 60 
};

Chronometer.prototype.twoDigitsNumber = function (timeArg) {
    if (timeArg < 10) {
    return "0" + timeArg
    }
    return String(timeArg)
};

Chronometer.prototype.setTime = function () {
    this.twoDigitsNumber()
    var minutes = this.setMinutes()
    var seconds = this.setSeconds()
};

// Chronometer.prototype.setMilliseconds = function () {
    
// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0
};

// Chronometer.prototype.splitClick = function () {

// };
