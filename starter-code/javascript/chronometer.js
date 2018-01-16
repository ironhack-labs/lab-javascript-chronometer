// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var self = this;

    self.intervalId = setInterval (function(){
                                            self.currentTime += 1; 
                                            self.setTime();
                                            }, 1000);

};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime/60); 
};

Chronometer.prototype.setSeconds = function () {
    return  this.currentTime - Math.floor(this.currentTime/60)*60; 
};

Chronometer.prototype.twoDigitsNumber = function (decimal) {
    if(decimal<10) {
        return "0"+decimal;
    }
    else {
        return decimal.toString();
    }
};

Chronometer.prototype.setTime = function () {
    var min = this.twoDigitsNumber(this.setMinutes());
    var sec = this.twoDigitsNumber(this.setSeconds());
    return  min + sec;
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    return this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
