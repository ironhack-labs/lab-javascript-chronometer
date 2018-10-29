// Constructor

function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(function(){
        this.currentTime++;
        this.setTime();
        printTime();
    }.bind(this),1000);
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (setTwoDigits) {
    if (setTwoDigits < 10) {
        return `0${setTwoDigits}`;
    } else {
        return `${setTwoDigits}`;
    }
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
};

Chronometer.prototype.setMilliseconds = function () {
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    return this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {
    return `${this.minutes}:${this.seconds}`;
};
