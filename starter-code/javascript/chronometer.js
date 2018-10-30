function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(function () {
        this.currentTime++;
        this.setTime();
    }.bind(this), 1000); 
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 60); 
};

Chronometer.prototype.setSeconds = function () {
    return (this.currentTime % 60); 
};

Chronometer.prototype.twoDigitsNumber = function (time) {
    var timeString = time.toString();
    if (timeString.length === 1) {
        return timeString = `0${time}`;

    } else {
        return timeString; 
    }

};

Chronometer.prototype.setTime = function () {
    var minutes =  this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    var miliseconds = this.twoDigitsNumber(this.setMilliseconds());
    console.log(seconds);
    printTime(seconds,minutes,miliseconds);
};

Chronometer.prototype.setMilliseconds = function () {
    return (this.currentTime % 60)*10;
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {

};