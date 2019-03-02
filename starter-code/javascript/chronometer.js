// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.intervalIdTwo = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(() => {
        this.currentTime++
        this.setTime();
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (time) {
    if (time < 10) {
        return '0' + time.toString();
    } else {
        return time.toString();
    }
};

Chronometer.prototype.setTime = function () {

};

Chronometer.prototype.setMilliseconds = function () {
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId,chronometer.intervalIdTwo);
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};
