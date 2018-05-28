// Constructor
function Chronometer() {

    this.currentTime = 0;
    this.intervalId = 0;

}

Chronometer.prototype.startClick = function () {

    var _this = this;

    this.intervalId = setInterval(function () {

        _this.currentTime++;

    }
        , 1000);

};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 60);
};

// Chronometer.prototype.setSeconds = function () {

// };

// Chronometer.prototype.twoDigitsNumber = function () {

// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {

// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
