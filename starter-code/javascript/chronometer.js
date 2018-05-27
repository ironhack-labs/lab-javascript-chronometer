// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var that = this;
    that.intervalId = setInterval(function(){
        that.currentTime ++;
        that.setTime();
        printTime(that);
        console.log("currentTime: "+that.currentTime);
    }, 10);
};

Chronometer.prototype.setMinutes = function () {
    var minutes = Math.floor(this.currentTime/6000);
    if (minutes === 100)
    {
        minutes = 0;
        this.currentTime = 0;
    }
    return minutes;
};

Chronometer.prototype.setSeconds = function () {
    return Math.floor(this.currentTime/100)%60;
};

Chronometer.prototype.setMilliseconds = function () {
    return this.currentTime%100;
};

Chronometer.prototype.twoDigitsNumber = function (num) {
    return num<10 ? "0"+num : num.toString();
};

Chronometer.prototype.setTime = function () {
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {

};
