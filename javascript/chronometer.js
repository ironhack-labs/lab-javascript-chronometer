class Chronometer {
  constructor() {

    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {

    this.intervalId = setInterval(() => {
      if (callback) { callback() }
      this.currentTime++

    }, 1000
    )

  }

  getMinutes() {
    let numberOfMinutes = Math.floor(this.currentTime / 60)
    return numberOfMinutes

  }

  getSeconds() {
    let numberOfSeconds = this.currentTime % 60
    return numberOfSeconds
  }

  computeTwoDigitNumber(value) {
    if (value <= 9) {
      return `0${value}`
    }
    else {
      return `${value}`
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
    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
