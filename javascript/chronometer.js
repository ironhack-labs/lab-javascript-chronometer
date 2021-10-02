class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    if (callback){
      this.intervalId = setInterval(callback, 1000)  
    } else {
      this.intervalId = setInterval(() => this.currentTime++, 1000)
    }
  }

  getMinutes() {
    let passedMinutes
    passedMinutes = Math.floor(this.currentTime/60)
    return passedMinutes
  }

  getSeconds() {
    // returns remainding seconds of currentTime downscaled to full minutes
    return this.currentTime%60
  }

  computeTwoDigitNumber(value) {
    let valueAsString = String(value)
    if (valueAsString.length < 2)
      valueAsString = "0" + valueAsString
    return valueAsString
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const split = this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())
    return split
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
