//Constructor

function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var self = this;
    self.intervalId = setInterval(function () {
        self.currentTime += 1;
        self.setTime();
    }, 1000);
};


Chronometer.prototype.setMinutes = function () {
    var self = this;
    return Math.floor(self.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    var self = this;
    return self.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return String(number);
    }
};

Chronometer.prototype.setTime = function () {
    var self = this;
    var minutes = self.twoDigitsNumber(self.setMinutes());
    var seconds = self.twoDigitsNumber(self.setSeconds());

}

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {

};
