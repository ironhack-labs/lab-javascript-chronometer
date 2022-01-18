class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (callback) { callback() }
    }, 1000)

    // ... your code goes here
  }

  getMinutes() {
    let minutes = this.currentTime / 60
    return Math.floor(minutes)
    // ... your code goes here
  }

  getSeconds() {
    let sec = this.currentTime % 60
    return sec
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value <= 9) { return `0${value}` }
    else {
      return `${value}`
    }
    // ... your code goes here
  }

  stop() {

    clearInterval(this.intervalId)

    // ... your code goes here
  }

  reset() {
    this.currentTime = 0
    // ... your code goes here
  }

  split() {
    let minuSanp = this.computeTwoDigitNumber(this.getMinutes())
    let secSnap = this.computeTwoDigitNumber(this.getSeconds())
    return `${minuSanp}:${secSnap}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
