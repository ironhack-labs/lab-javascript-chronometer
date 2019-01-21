// Constructor
function Chronometer () {
    this.currentTime = 0,
    this.intervalId = 0
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(()=>{
        this.currentTime++
        this.setTime()
    },10)
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 6000)
};

Chronometer.prototype.setSeconds = function () {
  return Math.floor((this.currentTime / 100)% 60)
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  return value.toString().padStart(2, '0')
};

Chronometer.prototype.setTime = function () {
    let segs = this.twoDigitsNumber(this.setSeconds())
    let mins = this.twoDigitsNumber(this.setMinutes())
    let mills = this.twoDigitsNumber(this.setMilliseconds())
    return mins+segs+mills
};

Chronometer.prototype.setMilliseconds = function () {
    console.log(this.currentTime)
    return this.currentTime % 100
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
    this.intervalId = 0
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0
};

