class Chronometer {
  
  constructor() {}

  currentTime = 0
  intervalId = null

  start() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    }
    ,1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60)
    return minutes
  }

  getSeconds() {
    let seconds = this.currentTime % 60 
    return seconds
  }
  
  computeTwoDigitNumber(value) {
    if (value <=9) {
      return `0${value}`
    }
      else {return `${value}`}
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    const minutesSplit = this.computeTwoDigitNumber(this.getMinutes())
    const secondsSplit = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutesSplit}:${secondsSplit}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
