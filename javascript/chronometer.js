class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60)
    return seconds
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2)
  }

  stop() {
    return clearInterval(this.intervalId)

  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    return `${("0" + Math.floor(this.currentTime / 60)).slice(-2)}:${("0" + Math.floor(this.currentTime % 60)).slice(-2)}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
