// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var self = this;
    this.intervalId = setInterval(function(){
        self.currentTime+=1;
        self.setTime();
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    var minutes = Math.floor(this.currentTime/60);
    return minutes;
};

Chronometer.prototype.setSeconds = function () {
    var secondsLeft = this.currentTime%60;
    return secondsLeft;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    return ("0" + number).slice(-2);
};

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    var milliseconds = this.twoDigitsNumber(this.setMilliseconds());
    return (minutes+seconds+milliseconds).toString();
};

Chronometer.prototype.setMilliseconds = function () {
    var milliseconds = this.currentTime*100;
    return milliseconds;
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {
    var time = this.setTime();
    var result = time.substring(0,2)+':'+time.substring(2,4) + ':' + time.substring(4);
    return result;
};
