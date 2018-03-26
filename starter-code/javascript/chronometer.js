function Chronometer() {

    this.currentTime = 0;
    this.intervalId = 0;

}

Chronometer.prototype.startClick = function () {

    var self = this;

    this.intervalId = setInterval(function () {

        self.currentTime++;

        self.setTime();

    }, 1000);

};


Chronometer.prototype.setMinutes = function () {

    this.currentMinutes = 0;

    return this.currentMinutes = Math.floor(this.currentTime / 60);

};

Chronometer.prototype.setSeconds = function () {

    this.currentSeconds = 0;

    if (this.currentTime > 0 && this.currentTime >= 60) {
        this.currentSeconds = (this.currentTime - this.setMinutes() * 60);
        return this.currentSeconds;
    }
    else if (this.currentTime > 0 && this.currentTime < 60) {
        this.currentSeconds = this.currentTime;
        return this.currentSeconds;
    }
    else {
        this.currentSeconds = 0;
        return this.currentSeconds;
    }

};


Chronometer.prototype.twoDigitsNumber = function (singleDigit) {

    if (singleDigit < 10) {
        singleDigit = '0' + singleDigit;
        return singleDigit;
    }

    else {
        return singleDigit + ''; // Hope this is not cheating :)
    }


};

Chronometer.prototype.setTime = function () {



};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {

    clearInterval(this.clearInterval);

};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};
