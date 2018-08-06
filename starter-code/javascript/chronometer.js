// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.start = 0;
}

Chronometer.prototype.startClick = function () {
    this.start = Date.now()
    this.intervalId = setInterval(function () {

        this.currentTime = Date.now() - this.start;
        this.setTime();

    }.bind(this), 10)
};


Chronometer.prototype.setMinutes = function () {

    return Math.floor(this.currentTime / 60000)
};

Chronometer.prototype.setSeconds = function () {

    return Math.floor(this.currentTime / 1000);
};

Chronometer.prototype.setMiliseconds = function () {
    return this.currentTime % 1000;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    if (value < 10) {
        value = "0" + value;
    } else {
        value += "";
    }
    return value.substring(0, 2);
};


Chronometer.prototype.setTime = function () {

    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    var miliseconds = this.twoDigitsNumber(this.setMiliseconds());
    return [minutes, seconds, miliseconds]
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
    console.log("stop");
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
