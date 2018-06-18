// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = "";
}

Chronometer.prototype.startClick = function () {
    var that = this;
    that.intervalId = setInterval(function(){
        that.currentTime = that.currentTime + 10;
        that.setTime();
    }, 10);
};

Chronometer.prototype.setMinutes = function () {
    var mins = this.currentTime/60000;
    return parseInt(mins);
};

Chronometer.prototype.setSeconds = function () {
    var secs = this.currentTime/1000 - this.setMinutes()*60;
    return parseInt(secs);
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    if(number < 10){
        return ("0" + number);
    } else {
        return number.toString();
    }
};

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    var milSecs = this.twoDigitsNumber(this.setMilliseconds());

    return {minutes: minutes, seconds: seconds, milSecs: milSecs};
};

Chronometer.prototype.setMilliseconds = function () {
    var milSecs = this.currentTime/10 - this.setSeconds()*100;
    return milSecs;
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.stopClick();
    this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {

};
