// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var i = 0;
    var that = this;
    setInterval(function() {
        that.currentTime++;
        that.setTime();
    },1000);
};

Chronometer.prototype.setMinutes = function () {
    var setMinutes = 0;
    setMinutes = Math.floor(this.currentTime/60);
    return setMinutes;
};

Chronometer.prototype.setSeconds = function (minutes) {
    var setSeconds = Math.floor(this.currentTime - minutes * 60);
    return setSeconds;
};

Chronometer.prototype.twoDigitsNumber = function (twoDigit) {
    if(twoDigit < 10) {
        return "0" + twoDigit;
    } else {
        return twoDigit.toString();
    }
};

Chronometer.prototype.setTime = function (time) {
    var minutes = this.twoDigitsNumber(this.setMinutes);
    var Seconds = this.twoDigitsNumber(this.setSeconds);
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    return clearInterval(this.intervalId); 
}

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
