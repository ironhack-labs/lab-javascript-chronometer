class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    this.milisecs = 0
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback) {
        callback()
      } 
      this.currentTime += 1
    }, 1000)

    this.miliInterval = setInterval(() => {
      this.milisecs++
    }, 1)
  }

  getMinutes() {
    let minutes = parseInt(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    if (this.currentTime > 59) {
      let seconds = this.currentTime % 60
      return seconds
    } else {
      return this.currentTime
    }
    
  }

  computeTwoDigitNumber(value) {
    if (value < 9) {
      return "0" + value
    } else {
      return value.toString()
    }
  }

  stop() {
    clearInterval(this.intervalId)
    clearInterval(this.miliInterval)
  }

  reset() {
    this.currentTime = 0
    this.milisecs = 0
  }

  split() {
    let computedMins = this.computeTwoDigitNumber(this.getMinutes())
    let computedSecs = this.computeTwoDigitNumber(this.getSeconds())

    return `${computedMins}:${computedSecs}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
