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
      this.currentTime += 10
    },10)
  }

  getMinutes() {
    let numMin = Math.floor((this.currentTime/1000)/60)
    return numMin
  }

  getSeconds() {
    let numSec = Math.floor((this.currentTime/1000)%60)
    return numSec
  }

  getMiliseconds() {
    let numMili = this.currentTime%1000
    return numMili
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

  reset(callback) {
    this.currentTime = 0
    if (callback) {
      callback()
    }
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let miliseconds = this.computeTwoDigitNumber(this.getMiliseconds())
    return `${minutes}:${seconds}:${miliseconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
