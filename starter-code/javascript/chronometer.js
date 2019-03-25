// Constructor ;
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milisecs = 0;
};

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(() => {
        this.currentTime++;
        this.setTime()
    }, 1000);


};

Chronometer.prototype.setMinutes = function () {
    return parseInt(this.currentTime/60)
};

Chronometer.prototype.setSeconds = function () {
    return parseInt(this.currentTime % 60)
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    if (number < 10 ) {
        return `0${number}`
    } else  {
        return `${number}`
    }
};

Chronometer.prototype.setTime = function () {
    let minutes = this.twoDigitsNumber(this.setMinutes);
    let seconds = this.twoDigitsNumber(this.setSeconds);
    let counter = this.intervalId;

};

Chronometer.prototype.setMilliseconds = function () {
};

Chronometer.prototype.stopClick = function () {
    clearInterval()
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;

};

// Chronometer.prototype.splitClick = function () {

// };
