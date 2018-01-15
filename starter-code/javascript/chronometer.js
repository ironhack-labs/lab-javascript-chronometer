// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var that = this;
    setInterval(function () {
        console.log(that.currentTime);
        that.currentTime++;
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {

    var minute = Math.floor(this.currentTime / 60);
    return minute;
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    if (value < 10) {
        return "0" + value;
    } else {
        return "" + value;
    }
};

Chronometer.prototype.setTime = function() {
    var that = this;
    this.startClick = setInterval(function(){
        var minutes = that.twoDigitsNumber(that.setMinutes());
        var seconds = that.twoDigitsNumber(that.setSeconds());
        return minutes + seconds;
    },1000);
};


// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
clearInterval(this.setTime);
 };

 Chronometer.prototype.resetClick = function () {
this.setTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };