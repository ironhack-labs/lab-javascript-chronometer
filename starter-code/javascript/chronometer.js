// Constructor
function Chronometer () {
    this.currentTime = 0,
    this.intervalId = 0
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(()=>{
        this.currentTime++
        this.setTime()
    },1000)
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60)
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  return value.toString().padStart(2, '0')
};

Chronometer.prototype.setTime = function () {
    let segs = this.twoDigitsNumber(this.setSeconds())
    let mins = this.twoDigitsNumber(this.setMinutes())

};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0
};

// Chronometer.prototype.splitClick = function () {

// };
