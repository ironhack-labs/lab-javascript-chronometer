class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      return this.intervalId
    }, 1000)
  }

  getMinutes() {

    let minutes = this.currentTime / 60
    return parseInt(minutes)

  }

  getSeconds() {

    let seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {

    if (value < 10) {

      return '0' + value
    }

    if (value === 0) {

      return '00'
    }
    if (value >= 10) {
      return value.toString()
    }

    return value
  }

  stop() {
    clearInterval(this.intervalId)

  }

  reset() {
    this.currentTime = 0
  }

  split() {

    let split = (this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds()))

    return split

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
