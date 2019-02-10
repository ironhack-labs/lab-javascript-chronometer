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
        this.setTime();
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 60)
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime - (this.setMinutes() * 60);
};

Chronometer.prototype.twoDigitsNumber = function (num) {
    single = num.toString();
    if (num < 10){
        single = '0' + single;
    }
    return single;
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    console.log(this.seconds)

};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.startClick);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;  
};

// Chronometer.prototype.splitClick = function () {

// };
