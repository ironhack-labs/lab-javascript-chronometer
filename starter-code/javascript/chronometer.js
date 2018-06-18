// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = "";
}

Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function () {
        that.currentTime += 1;
        that.setTime();
    }, 1000);
}

Chronometer.prototype.setMinutes = function () {
    var minutes = Math.floor(this.currentTime/60)
    return minutes
};

Chronometer.prototype.setSeconds = function () {
    var seconds = this.currentTime - this.setMinutes()*60
    return seconds
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    number = number.toString();
    if(number.length == 2){
        return number
    }else {
        return "0" + number;
    }
};

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());

    return {minutes: minutes, seconds: seconds};

};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.stopClick();
    this.currentTime = 0;
};

//Chronometer.prototype.splitClick = function () {

//};
