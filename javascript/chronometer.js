class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if(callback !=null)  callback()             
    
  }, 1000)
  }

  getMinutes() {
    const numberOfMinutes = Math.floor(this.currentTime / 60)
    return numberOfMinutes
  }

  getSeconds() {
    const numberOfSeconds = this.currentTime % 60
    return numberOfSeconds
  }

  computeTwoDigitNumber(value) {
    let valueToString = value.toString()
    if (valueToString.length < 2) {
      // no = assignment with return statement!
      return  "0" + valueToString
    } else if (valueToString.length === 2) {
      return valueToString
    }      
    }
  

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
