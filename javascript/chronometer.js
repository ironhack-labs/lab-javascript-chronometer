class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null
  }

  start() {
    // ... your code goes here
    if (!this.intervalId) this.intervalId = setInterval(() => this.currentTime++, 1000)

  }
  getMinutes() {
    // ... your code goes here
    return this.computeTwoDigitNumber(Math.floor(this.currentTime / 60))

  }

  getSeconds() {
    // ... your code goes here
    return this.computeTwoDigitNumber(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    if (value > 9) {
      return (value) + ''
    } else {
      return '0' + value
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minutes = this.getMinutes()
    let secs = this.getSeconds()
    return `${minutes}:${secs}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}