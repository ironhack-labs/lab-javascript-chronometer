//Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = ""
}

Chronometer.prototype.startClick = function () {
    var that = this
    this.intervalId = setInterval(function () {
        that.currentTime++;
        that.setTime();
    }, 1000)
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 60);
}

Chronometer.prototype.setSeconds = function (minutes) {
    return this.currentTime - minutes * 60;
};

Chronometer.prototype.twoDigitsNumber = function (e) {

    if (e < 10){
        return "0" + e;
    } else {
        return e.toString()
    }

};

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes())
    var seconds = this.twoDigitsNumber(this.setSeconds(minutes))
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {

    clearInterval(this.intervalId)

};

Chronometer.prototype.resetClick = function () {

    this.currentTime = 0

};

Chronometer.prototype.splitClick = function () {

};