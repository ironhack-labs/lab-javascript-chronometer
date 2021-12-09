class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null

  start(callback) {
    start() {
      const currentTime = setInterval(() => {
        return this.currentTime++
      }, 1000)
      }
  }

  getMinutes() {
    const inMinutes = Math.floor(this.currentTime / 60)
    return inMinutes
  }

  getSeconds() {
    let seconds = this.currentTime%60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
