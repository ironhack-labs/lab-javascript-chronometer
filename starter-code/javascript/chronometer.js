function Chronometer() {
    this.currentTime = 0;
    this.intervalId = "";
}
Chronometer.prototype = Object.create(Chronometer.prototype)
Chronometer.prototype.Constructor = Chronometer;
Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function () {
    that.currentTime++; 
    that.setTime(that.currentTime)
    }, 1000);
};
Chronometer.prototype.setMinutes = function () {
    var that = this;
    return parseInt(this.currentTime / 60);
};
Chronometer.prototype.setSeconds = function () {
    var that = this;
    return parseInt(this.currentTime % 60);
};
Chronometer.prototype.twoDigitsNumber = function (value) {
    if (parseInt(value) < 10) {
        value = '0' + value;
    }
    else {
        value = "" + value;
    }
        
    return value;
};
Chronometer.prototype.setTime = function () {    
var minutes = this.setMinutes;
var seconds = this.setSeconds;
};
Chronometer.prototype.setMilliseconds = function () {
};
Chronometer.prototype.stopClick = function () {
    clearInterval(this.startClick);
    this.currentTime = 0;
};
Chronometer.prototype.resetClick = function () {
      
};
Chronometer.prototype.splitClick = function () {
};