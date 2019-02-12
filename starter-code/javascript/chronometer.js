// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(()=>{
        this.currentTime++;
        this.setTime();
      }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
    return Math.floor(this.currentTime%60);
};

Chronometer.prototype.twoDigitsNumber = function (numValue) {

};

Chronometer.prototype.setTime = function () {

};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {

};

Chronometer.prototype.resetClick = function () {

};
