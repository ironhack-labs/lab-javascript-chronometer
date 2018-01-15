// Constructor

function Chronometer() {
    this.currentTime = 0;
    this.intervalId;
 }


    Chronometer.prototype.startClick = function () {
        var self = this;
        this.intervalId = setInterval(function () {
            self.currentTime++;
        }, 1000);
    };

    Chronometer.prototype.setMinutes = function () {
        return Math.floor(this.currentTime / 60);
    };
  
    Chronometer.prototype.setSeconds = function () {
        return this.currentTime % 60;
    };

    Chronometer.prototype.twoDigitsNumber = function (value) {
        return ('0' + value).slice(-2);
    };
  
    Chronometer.prototype.setTime = function () {
        return this.twoDigitsNumber(this.setMinutes()) + ':' + this.twoDigitsNumber(this.setSeconds());
    };

    Chronometer.prototype.stopClick = function () {
        clearInterval(this.intervalId);
    };

    Chronometer.prototype.resetClick = function () {
        this.currentTime = 0;
    };

// Chronometer.prototype.splitClick = function () {

// };
