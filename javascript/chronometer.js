class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(function () {
      this.currentTime += 1
      if (callback === 'function') {
        callback()
      }
    }.bind(this), 1000)
  }

  getMinutes() {
    const mins = this.currentTime / 60
    return parseInt(mins)
  }

  getSeconds() {
    const secnd = this.currentTime % 60
    return parseInt(secnd)
  }

  computeTwoDigitNumber(value) {
    const str = value.toString()
    if (str === '0') {
      return '00'
    } else if (str.length === 1) {
      return str.padStart(2, '0')
    }
    return str
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const mins = this.getMinutes()
    const sec = this.getSeconds()
    const sum = this.computeTwoDigitNumber(mins) + ':' + this.computeTwoDigitNumber(sec)
    return sum
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
