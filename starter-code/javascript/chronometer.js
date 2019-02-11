//Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = '';
}

Chronometer.prototype.startClick = function() {
    var that = this
    this.intervalId = setInterval(function() {
        that.setTime();
        that.currentTime++

    }, 1000)
};

Chronometer.prototype.setMinutes = function() {
    return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function() {
    return this.currentTime - (Math.floor(this.currentTime / 60)) * 60

};

Chronometer.prototype.twoDigitsNumber = function(number) {
    if (number < 10) {
        return "0" + number
    }
    return number.toString()
};

Chronometer.prototype.setTime = function() {
    var seconds = this.twoDigitsNumber(this.setSeconds())
    var minutes = this.twoDigitsNumber(this.setMinutes())
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function() {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
    this.currentTime = 0
};

// Chronometer.prototype.splitClick = function () {

// };