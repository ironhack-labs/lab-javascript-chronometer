class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if(callback) callback()
      this.currentTime++
      printTime()
    }, 1000)
  }

  getMinutes() {
    return this.currentTime / 60
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return `0${value}`
    if (value >= 10) return `${value}`
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0

  }

  split() {
    let splittedMinutes = this.computeTwoDigitNumber(getMinutes(0))
    let splittedSeconds = this.computeTwoDigitNumber(getSeconds(0))
    return `${splittedMinutes}:${splittedSeconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
