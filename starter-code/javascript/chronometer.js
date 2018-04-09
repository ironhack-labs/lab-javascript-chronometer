var currentTime = 0;

function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
    var cronometro = this;
    this.intervalId = setInterval(function() {
        cronometro.currentTime++;
        cronometro.setTime();
    }, 1000);
};

Chronometer.prototype.setMinutes = function() {
    return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function() {
    return Math.floor(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function(value) {
    if (value < 10) {
        return "0" + value;
    } else {
        return "" + value;
    }
};

Chronometer.prototype.setTime = function() {
    this.seconds = this.twoDigitsNumber(this.setSeconds());
};

Chronometer.prototype.setMilliseconds = function() {
    return (this.currentTime - this.currentTime % 60)
}

Chronometer.prototype.stopClick = function() {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
    clearInterval(this.currentTime);
};

// Chronometer.prototype.splitClick = function () {

// };s