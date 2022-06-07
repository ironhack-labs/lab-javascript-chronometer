class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }


  start(callback) {
    if (callback) {
      this.intervalId = setInterval(() => {
        callback();
        this.currentTime++
      }, 1000)
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++
      }, 1000)
    }
  }

  getMinutes() {
    const numberOfMinutes = Math.floor(this.currentTime / 60)
    return numberOfMinutes
  }

  getSeconds() {
    const numberOfSeconds = this.currentTime % 60
    return numberOfSeconds
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value.toString()
    }
    return value.toString()
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes()).toString()
    const sec = this.computeTwoDigitNumber(this.getSeconds()).toString()
    return (min + ":" + sec)
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
