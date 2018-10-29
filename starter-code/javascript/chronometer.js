// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.startClick;

}

Chronometer.prototype.startClick = function() {
    this.intervalId = setInterval(function() {
        this.currentTime = this.currentTime + 1;
        this.setTime()
    }.bind(this), 1000)

};

Chronometer.prototype.setMinutes = function() {
    var calcMinutos = this.currentTime / 60;

    return Number(Math.floor(calcMinutos));


};

Chronometer.prototype.setSeconds = function() {
    var calcSegundos = this.currentTime % 60;
    return Number(Math.floor(calcSegundos));
};

Chronometer.prototype.twoDigitsNumber = function(digits) {
    if (digits < 10) {
        digits = "0" + digits
    }
    return String(digits)

};

Chronometer.prototype.setTime = function() {
    var minutos = this.twoDigitsNumber(this.setMinutes);
    var segundos = this.twoDigitsNumber(this.setSeconds);
    return minutos, segundos;

};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function() {
    clearInterval(this.intervalId);
    return this.currentTime = this.currentTime + 0;
};

Chronometer.prototype.resetClick = function() {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };