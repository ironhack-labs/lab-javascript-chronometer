class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback)
        callback()
      this.currentTime++
    }, 1000)
  }
  // no necesita return 


  getMinutes() {
    const min = Math.floor(this.currentTime / 60)
    return min
  }

  getSeconds() {
    const sec = Math.floor(this.currentTime % 60)
    return sec
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return `0${value}`
    if (value > 10) return `${value}`
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let splitMin = this.computeTwoDigitNumber(this.getMinutes())
    let splitSec = this.computeTwoDigitNumber(this.getSeconds())

    return `${splitMin}:${splitSec}`

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
