/// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
 }

Chronometer.prototype.startClick = function () {
    var self = this;
    this.intervalId = setInterval(function() {
        self.currentTime ++;
        self.setTime();
    }, 1000);

};

Chronometer.prototype.setMinutes = function () {   
    return Math.floor(this.currentTime / 60);
    // var minutosEnteros = Math.floor(this.currentTime / 60);
    // var minutosRestantes = Math
};

Chronometer.prototype.setSeconds = function () {
    if (this.currentTime === 0) {
        return 0;
    }
    return this.currentTime - this.setMinutes() * 60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    var formatNumber = ("0" + number).slice(-2);
    return formatNumber;
};

Chronometer.prototype.setTime = function () {

};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {

};

// Chronometer.prototype.splitClick = function () {

// };