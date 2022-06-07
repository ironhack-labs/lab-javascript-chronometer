class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    if (callback) {
      return callback()
    }
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
  }


  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    let seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString()
    if (stringValue.length < 2) {
      value = '0' + value
      return value
    }
    return value.toString()
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = Math.floor(this.getMinutes()) 
    let seconds = Math.floor(this.getSeconds()) 
    let computedMinutes = this.computeTwoDigitNumber(minutes)
    let computedSeconds = this.computeTwoDigitNumber(seconds)
    return computedMinutes + ':' + computedSeconds
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
