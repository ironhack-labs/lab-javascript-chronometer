class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    if(callback){
      this.intervalId = setInterval(() => {
        this.currentTime++
        callback()
      }, 1000)
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++
      }, 1000)
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return (this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
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
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const result = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
    return result
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
