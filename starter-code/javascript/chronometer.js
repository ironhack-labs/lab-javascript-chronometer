// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = '';
    this.miliseconds = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(() => {
        this.setTime();
        this.miliseconds++;
        if(this.miliseconds % 100 == 0) {
            this.currentTime++;
            this.miliseconds = 0;
        }
    }, 10);
};

Chronometer.prototype.setMinutes = function () {
  return parseInt(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value1) {
    if (value1 < 10){
        return "0" + value1;
    } 
    return value1.toString();
};

Chronometer.prototype.setTime = function () {
    let minutes = this.setMinutes ();
    let seconds = this.twoDigitsNumber (this.setSeconds());
};

Chronometer.prototype.setMilliseconds = function () {
    return (this.miliseconds < 10) ? ("00" + this.miliseconds)
    :((this.miliseconds < 100) && "0" + this.miliseconds);
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime=0;
    this.miliseconds=0;
};

// Chronometer.prototype.splitClick = function () {
    
// };
