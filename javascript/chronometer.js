class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++
      if (callback) callback()
    }, 10)
  }

  getMinutes() {
    return Math.floor((this.currentTime / 100) / 60)
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60)
  }

  getMilliseconds() {
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    return String(value).padStart(2, '0')
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
    const miliSeconds = this.computeTwoDigitNumber(this.getMilliseconds())
    return `${minutes}:${seconds}:${miliSeconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer
}
