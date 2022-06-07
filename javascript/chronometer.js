class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }


  start(callback) {

    this.intervalId = setInterval(() => {
      this.currentTime++
      if (callback) {
        callback()
      }
    }, 1000)


  }





  getMinutes() {

    let minutes = Math.trunc(Math.floor(this.currentTime) / 60)

    return minutes
  }


  getSeconds() {
    let seconds = Math.trunc(Math.floor(this.currentTime) % 60)
    return seconds
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return 0 + value.toString()
    } else {
      return value.toString()
    }
  }

  stop() {

    clearInterval(this.intervalId)

  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    let minutesClock = this.computeTwoDigitNumber(this.getMinutes()).split()
    let secondClock = this.computeTwoDigitNumber(this.getSeconds()).split()
    return minutesClock + ":" + secondClock
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

