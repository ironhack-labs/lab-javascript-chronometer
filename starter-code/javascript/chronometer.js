// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = null;
    this.isOn = false;
    this.time = {sec: 0, min: 0, ms: 0};

}

Chronometer.prototype.startClick = function () {
    this.isOn = true;
    this.intervalId = setInterval(() => { 
        this.currentTime += 1;
        return this.setTime();
    },1000)
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    return value < 10 ? '0' + value : value + '';
};

Chronometer.prototype.setTime = function () {
    let seconds = this.twoDigitsNumber(this.setSeconds());
    let minutes = this.twoDigitsNumber(this.setMinutes());
    // let miliseconds = this.setMilliseconds();
    this.time = {sec: seconds, min:minutes}
    printMinutes();
    printSeconds();
    // printMilliseconds();
};

Chronometer.prototype.setMilliseconds = function () {
    if(this.currentTime === 1000){
        this.time.ms = 0
        this.currentTime = 0
    } else {
        this.time.ms = this.currentTime;
    }
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    this.isOn = false;
  
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    return this.setTime();
};

Chronometer.prototype.splitClick = function () {
    printSplit();
};