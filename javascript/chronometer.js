class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      console.log(this.currentTime++) 
      if (callback) {
        callback()
      }
      
    }, 1000);
  }

  getMinutes() {
    return this.currentTime < 60 ? 0 : Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime < 60 ? this.currentTime : this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    return value >= 10 ? value.toString() : `0${value}`
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
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
