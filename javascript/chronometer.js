class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.totalMinutes = 0;
    this.totalSeconds = 0;
    this.splitMinutes = 0;
    this.splitSeconds = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      callback()
    }, 1000)
  }

  getMinutes() {
    // currentTime is currently in seconds 
    // return the number of minutes passed
    this.totalMinutes = Math.floor(this.currentTime / 60)
    return this.totalMinutes
  }

  getSeconds() {
    // return the remainder after dividing into minutes
    this.totalSeconds = this.currentTime % 60
    return this.totalSeconds
  }

  computeTwoDigitNumber(value) {
    // if the total minutes or seconds are < 10, add a 0 at the start and return a string
    return (value < 10 ? '0' : '') + value
  }

  stop() {
  // clear the interval
    clearInterval(this.intervalId);
  }

  reset() {
  // reset the currentTime elapsed
    this.currentTime = 0
  }

  split() {
    // return a string containing the number of minutes and seconds elapsed 
    this.splitMinutes = this.computeTwoDigitNumber(this.getMinutes())
    this.splitSeconds = this.computeTwoDigitNumber(this.getSeconds())
    return (`${this.splitMinutes}:${this.splitSeconds}`)
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
