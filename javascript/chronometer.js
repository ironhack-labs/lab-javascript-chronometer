class Chronometer {
  constructor(currentTime, intervalID) {
    this.currentTime = 0;
    this.intervalID = null

  }

  start(callback) {
    this.intervalID = setInterval(() => {
      if (callback) {
        callback()
      }
      this.currentTime++
    }, 1000)
    // let currentTime = this.intervalID += 1;
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return (this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    // to get the 0 use `0${currentTime}`
    return `0${this.currentTime}`
  }

  stop() {
    clearInterval(this.intervalID)
  }

  reset() {
    Math.floor(this.currentTime)
  }

  split() {
    
      this.currentTime.split(2);
  }
}
const myChrono = new Chronometer()
myChrono.currentTime = 245
console.log(myChrono.getSeconds())

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}