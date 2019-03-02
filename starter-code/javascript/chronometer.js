// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.seconds = 0;
    this.minutes = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(function() {
        this.setTime();
    }.bind(this), 1000);
};

Chronometer.prototype.setMinutes = function () {
    this.minutes = Math.floor(this.currentTime/60);
    return this.minutes;
};

Chronometer.prototype.setSeconds = function () {
    this.seconds = this.currentTime%60;
    return this.seconds;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    if (value < 10) {
        return "0" + value;
    } 
    return value.toString();
};  

Chronometer.prototype.setTime = function () {
    this.currentTime += 1;
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };
