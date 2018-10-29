// Constructor

function Chronometer() {

    this.currentTime = 0;
    this.intervalId = '';

}


Chronometer.prototype.startClick = function () {

    var that = this;

    this.intervalId = setInterval(function() {
        that.setTime();
        that.currentTime++;
    },1000);
     
}; 

Chronometer.prototype.setMinutes = function () {
    return parseInt(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    return Math.round(+(((this.currentTime/60)%1)*60));
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    
    if (number < 10) {
        return `0${number}`;
    } else {
        return `${number}`;
    }

    // return (number < 10 )?`0${number}`:number;

};

Chronometer.prototype.setTime = function () {

    var minunts = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());

};

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
