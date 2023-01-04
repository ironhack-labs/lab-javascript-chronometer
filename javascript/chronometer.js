class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.miliseconds = 0
    this.intervalId = null
  }

  start(callback) {
    // ... your code goes here
    let count = 0
    this.intervalId = setInterval(() => {
      if(count % 100 === 0 && count) {
        this.currentTime++
      }
      callback()
      if(this.miliseconds < 99) {
        this.miliseconds++
      } else {
        this.miliseconds = 0
      }
      count++
    }, 10)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const valueStr = value.toString()
    const valueArr = valueStr.split("")
    if (valueArr.length === 2) {
      return valueArr.join("")
    } else if (valueArr.length === 1) {
      valueArr.unshift("0")
      return valueArr.join("")
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
    const result = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
    return result
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
