// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  this.intervalId =  setInterval(function () {
        this.currentTime++;
        this.setTime();
         

    }.bind(this), 1000);
    
};

Chronometer.prototype.setMinutes = function () {
    var minute = this.currentTime / 60;
    return Math.floor(minute);
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime % 60;

};

Chronometer.prototype.twoDigitsNumber = function (e) {
    if (e < 10) {
        return "0" + e.toString();
    } else {
        return e.toString();
    }

};

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    
    printTime(minutes, seconds);
}



// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
