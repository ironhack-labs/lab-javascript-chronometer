class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start() {
      this.intervalId = setInterval(() => {
          this.currentTime++
        }, 1000)
    }
  
  getMinutes() {
    const minutes = this.currentTime / 60
    return Math.floor(minutes)
  }

  getSeconds() {
    const seconds = this.currentTime % 60
    return Math.floor(seconds)
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value.toString()
    } else {
      return value.toString()
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {

      let minutes = this.getMinutes()
      let seconds = this.getSeconds()

      let splitMinutes = this.computeTwoDigitNumber(minutes)
      let splitSeconds = this.computeTwoDigitNumber(seconds)

      return `${splitMinutes}:${splitSeconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
