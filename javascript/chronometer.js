class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    if (callback){
      this.intervalID = setInterval(callback, 1000)  
    } else {
      this.intervalID = setInterval(() => this.currentTime++, 1000)
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
