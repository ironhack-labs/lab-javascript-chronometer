// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 1;    
    this.minutes = 0;
    this.seconds = 0;
}

Chronometer.prototype.startClick = function () {
    setInterval(() => {
        this.currentTime = this.currentTime + 1;
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    this.minutes = this.currentTime / 60;
    return Math.floor(this.minutes)
};

Chronometer.prototype.setSeconds = function () {
    if (this.currentTime > 60){
        this.seconds = this.currentTime - 60;
    } else {
        this.seconds = this.currentTime
    }
    return this.seconds;
};

Chronometer.prototype.twoDigitsNumber = function (num) {
    single = num.toString();
    if (num < 10){
        single = '0' + single;
    }
    return single;
};

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
