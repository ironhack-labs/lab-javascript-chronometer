// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = 0;
    this.seconds = 0;
};

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(() => {
        this.currentTime += 1;
        this.setTime();
        },1000);
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
     return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (input) {
    if (input.toString().length === 1) {
       return "0" + input;
    } else {
       return "" + input;
    }
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber((this.setMinutes()));
    this.seconds = this.twoDigitsNumber((this.setSeconds()));
};

// Chronometer.prototype.setMilliseconds = function () {
// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId );
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.setTime();
};

// Chronometer.prototype.splitClick = function () {

// };


