class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback) {
        callback()
      }
      this.currentTime++
    }, 1000)

  }

  getMinutes() {
    const minutes = parseInt(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    const seconds = parseInt(this.currentTime % 60)
    return seconds
  }

  computeTwoDigitNumber(value) {

    if (value < 10) {
      return `0${value}`
    }

    return `${value}`
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())

    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
