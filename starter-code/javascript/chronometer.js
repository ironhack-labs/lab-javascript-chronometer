// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.miliSeconds = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(() => {
        this.currentTime++;
        this.setTime();
        printTime();
    }, 1000);
    this.intervalIdMiliSeconds = setInterval(() => {
        this.miliSeconds < 100 ? this.miliSeconds++ : this.miliSeconds = 0;
        this.setTime();
        printTime();
    }, 10)
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime - (this.setMinutes() * 60);
};

Chronometer.prototype.setMilliseconds = function () {
    return this.miliSeconds;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    if (value.toString().length < 2) {
        return `0${value}`
    }
    return `${value}`
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    this.miliSeconds = this.twoDigitsNumber(this.setMilliseconds());
};


Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMiliSeconds);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.miliSeconds = 0;
    this.setTime();
    printTime();
};

Chronometer.prototype.splitClick = function () {

};
