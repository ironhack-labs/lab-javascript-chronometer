class Chronometer {
  constructor() {
  this.currentTime = 0
  this.intervalId = 0
  this.minutes = 0
  this.seconds = 0
  }
  startClick() {
    this.intervalId = setInterval(() => {
        this.currentTime++
        this.setTime()
        printTime()
    }, 500)   
  }
  setMinutes() {
    return Math.floor(this.currentTime/60)
    // return a number = minutes
  }
  setSeconds() {
    return this.currentTime % 60
  }
  twoDigitsNumber(val) {
    val = val.toString()
    if (val.length == 2) return val
    if (val.length == 1) return 0 + val
  }
  setTime() {
    this.minutes = this.twoDigitsNumber(this.setMinutes())
    this.seconds = this.twoDigitsNumber(this.setSeconds())
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
    this.minutes = 0
    this.seconds = 0
  }
}

// Chronometer.prototype.startClick = function () {

// };

// Chronometer.prototype.setMinutes = function () {
  
// };

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

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
