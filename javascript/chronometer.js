class Chronometer {
  constructor() {
    this.currentTime = 0
    this.currentMilliseconds = 0

    this.intervalId = null
    this.intervalMilliseconds = null
  }

  start(callback) {

    this.intervalId = setInterval(() => {
      if (callback) callback();
      this.currentTime++;
      printTime()
    }, 1000);

    this.intervalMilliseconds = setInterval(() => {

      if (this.currentMilliseconds < 100 ) {
        this.currentMilliseconds++;
      } else {
        this.currentMilliseconds = 0
      }
      printMilliseconds()
    }, 10);
  }

  getMinutes() {
    return parseInt(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    return (value < 10) ? `0${value}` : `${value}` 
  }

  stop() {
    clearInterval(this.intervalId)
    clearInterval(this.intervalMilliseconds)
  }

  reset() {
    this.currentTime = 0
    this.currentMilliseconds = 0
  }

  split() {
    let mins = this.computeTwoDigitNumber(this.getMinutes())
    let secs = this.computeTwoDigitNumber(this.getSeconds())
    return `${mins}:${secs}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
