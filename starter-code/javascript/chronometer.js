// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    let self = this;
    self.intervalId = setInterval(function () {
        self.currentTime += 1;
        console.log(self.currentTime)
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    let minute = this.currentTime
    return math.floor(minute / 60)
};

 
Chronometer.prototype.setSeconds = function () {
    let seconds = this.currentTime % 60
    return seconds
    };

Chronometer.prototype.twoDigitsNumber = function () {
    let num = this.currentTime;
    if (num <= 9) {
        return `0${num}`;
    }
};


 Chronometer.prototype.setTime = function () {

 };

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
};

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };