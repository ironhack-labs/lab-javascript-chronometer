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

  // ... your code goes here


  getMinutes() {

    let minutes = Math.floor(this.currentTime / 60)

    return minutes

    // ... your code goes here
  }

  getSeconds() {

    let seconds = Math.floor(this.currentTime % 60)
    return seconds
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value
    } else {
      return value + ''
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    let reset = this.currentTime = 0
    return reset
    // ... your code goes here
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`


    // ... your code goes here


  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
