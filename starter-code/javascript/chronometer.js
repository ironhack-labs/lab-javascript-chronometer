// Constructor
function Chronometer() {
    this.currentTime = 0
    this.intervalId = 0
}

Chronometer.prototype.startClick = function() {
    var that = this
    this.intervalId = setInterval(function() {
        that.currentTime++
            printTime()
        that.setTime()
    }, 1000)
};

Chronometer.prototype.setMinutes = function() {
    return Math.trunc(this.currentTime / 60)
};

Chronometer.prototype.setSeconds = function() {
    return this.currentTime % 60
};

Chronometer.prototype.twoDigitsNumber = function(value) {
    var twoDigits = ""
    if (value === 0) {
        twoDigits = "00"
    } else if (value < 10) {
        twoDigits = "0" + value.toString()
    } else {
        twoDigits = value.toString()
    }
    return twoDigits

    // if (value === 0) {
    //     return "00"
    // } else
    //   return (value.length === 1) ? "0" + value : value.toString()
};

Chronometer.prototype.setTime = function() {
    var minutes = this.twoDigitsNumber(this.setMinutes())
    var seconds = this.twoDigitsNumber(this.setSeconds())
    return [seconds, minutes]
};

Chronometer.prototype.setMilliseconds = function() {

};

Chronometer.prototype.stopClick = function() {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
    this.currentTime = 0
};

Chronometer.prototype.splitClick = function() {

};