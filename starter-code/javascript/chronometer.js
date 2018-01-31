// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function () {
        that.currentTime ++;
        that.setTime();
      }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime - (this.setMinutes() * 60)
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    if(value < 10)
        return ('0' + value.toString());
    else
        return value.toString();
};

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    var milliseconds = this.twoDigitsNumber(this.setMilliseconds());
    return (minutes).toString() + ":" + (seconds).toString();
};

Chronometer.prototype.setMilliseconds = function () {
    return Math.round((this.currentTime % 1) * 100, 0);
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {
    
// };
