class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() =>
    {
      if (callback) {
        callback()
      }
      this.currentTime += 1
    },1000)
  }

  getMinutes() {
    let numMin = Math.floor(this.currentTime/60)
    return numMin
  }

  getSeconds() {
    let numSec = this.currentTime%60
    return numSec
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString()
    if (stringValue.length === 1) {
      return '0' + stringValue
    }
    return stringValue
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
    document.querySelector("#minDec").innerHTML = this.computeTwoDigitNumber(this.getMinutes())[0];
    document.querySelector("#minUni").innerHTML = this.computeTwoDigitNumber(this.getMinutes())[1];
    document.querySelector("#secDec").innerHTML = this.computeTwoDigitNumber(this.getSeconds())[0];
    document.querySelector("#secUni").innerHTML = this.computeTwoDigitNumber(this.getSeconds())[1];
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
