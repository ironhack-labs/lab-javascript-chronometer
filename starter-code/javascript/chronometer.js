//Constructor

function Chronometer() {
    this.min = 0;
    this.sec = 0;
    this.currentTime = 0;
    this.intervalId = -1;
}

Chronometer.prototype.timerHandler = function () {
    this.currentTime += 1;
    this.setTime();
 };

Chronometer.prototype.startClick = function () {
   this.intervalId = setInterval(this.timerHandler.bind(this),1000);
};

Chronometer.prototype.setMinutes = function (min) {
    this.min = Math.floor(this.currentTime/60);
    return this.min;
};

Chronometer.prototype.setSeconds = function (sec) {
    this.sec = this.currentTime % 60;
    return this.sec;
};

Chronometer.prototype.twoDigitsNumber = function (time) {
    if (time < 10) {
        return "0" + time ;
    } else {
        return String(time);
    }
    console.log(time)
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
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
