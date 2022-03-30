class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
    console.log(this.currentTime)
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    const seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`
    } else {
      return `${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
    return this.currentTime
  }

  split() {
    const value1 = this.computeTwoDigitNumber(this.getMinutes(this.currentTime))
    const value2 = this.computeTwoDigitNumber(this.getSeconds(this.currentTime))
    return `${value1}:${value2}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
