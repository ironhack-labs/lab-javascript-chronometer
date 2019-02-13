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
    this.millisconds = this.currentTime / 1000;
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};
