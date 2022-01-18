class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    // ... your code goes here

    // setInterval() retorna un valor numérico, su ID
    this.intervalId = setInterval(() => {
      if (callback) {
        callback()
      }
      this.currentTime++;
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    let seconds = (this.currentTime % 60)
    return seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value.toString().length === 1) {
      return ('0' + value)
    } else {
      return value.toString()
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
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())

    const string = `${minutes}:${seconds}`
    return string
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
