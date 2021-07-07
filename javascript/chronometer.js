class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if(callback) return callback()
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100)
  }

  getMilliseconds() {
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    return value.toFixed().length === 2 ? value.toFixed() : "0" + value
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + 
      ':' + this.computeTwoDigitNumber(this.getSeconds()) + 
      ':' + this.computeTwoDigitNumber(this.getMilliseconds()) 
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
