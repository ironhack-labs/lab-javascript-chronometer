class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
    this.currentTime++
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60);
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    const seconds = (this.currentTime % 60)
    return seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    
    if (value === 0) { 
      return `00`
    } else if (value < 10) {
      return `0${value}`
    } else {
      return `${value}`
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let splitTime = `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
    return splitTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
