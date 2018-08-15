//Constructor
function Chronometer() {
    this.currentTime = 0
    this.intervalId = 0
}

Chronometer.prototype.startClick = function (){  
    this.intervalId = setInterval(() => {
        this.currentTime += 1
        this.setTime();
        printTime();
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    var minutes = 0
    minutes = Math.floor(this.currentTime/60)
    return minutes
};

Chronometer.prototype.setSeconds = function () {
    var seconds = 0
    seconds = this.currentTime%60
    return seconds
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    if (value<10){
        return "0" + value
    } 
    return value + "";
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
};

Chronometer.prototype.setMilliseconds = function () {

};  

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
    this.currentTime=0;
};

Chronometer.prototype.splitClick = function () {

};

