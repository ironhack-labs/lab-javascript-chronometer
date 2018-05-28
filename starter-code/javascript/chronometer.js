// Constructor
function Chronometer() {

    this.currentTime = 0;
    this.intervalId = 0;

}

Chronometer.prototype.startClick = function () {

    var _this = this;

    this.intervalId = setInterval(function () {

        _this.currentTime++;

        _this.setTime();

    }
        , 1000);

};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {

    return this.currentTime - this.setMinutes() * 60;

};

Chronometer.prototype.twoDigitsNumber = function (digits) {

    var digitString = "" + digits;

    if (digitString.length == 1) {
        digitString = "0" + digitString;
    }

    return digitString;

};

Chronometer.prototype.setTime = function () {



};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {

    clearInterval(this.intervalId);

};

Chronometer.prototype.resetClick = function () {

    this.currentTime = 0;

};

// Chronometer.prototype.splitClick = function () {

// };
