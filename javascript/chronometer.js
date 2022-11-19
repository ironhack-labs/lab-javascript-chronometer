class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliSecsId = null;
    this.currentMilliSecs = 0;
  }


  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      callback()
    }, 1000)
    return this.intervalId
  }

  getMillisecs(callback) {
    this.milliSecsId = setInterval(() => {
      this.currentMilliSecs++
      callback()
    }, 10)
    return this.milliSecsId
  }

  getMinutes() {
    let minutes = Math.floor((this.currentTime / 60))
    return minutes
  }

  getSeconds() {
    let secs = this.currentTime % 60
    return +secs.toFixed(0)
  }

  computeTwoDigitNumber(value) {
    let valueString = value.toString()
    if (valueString.length === 1) {
      return '0' + valueString
    }
    else return valueString
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.milliSecsId);
  }

  reset() {
    this.currentTime = 0;
    this.currentMilliSecs = 0;
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
