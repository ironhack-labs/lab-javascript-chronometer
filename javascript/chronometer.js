class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(callback) {
    if (callback) {
      return intervalId
    }

    this.intervalId = setInterval(() => {
      return this.currentTime++
    }, 1000);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)

    return minutes
  }

  getSeconds() {
    const secondsLeft = this.currentTime % 60
    return secondsLeft
  }

  computeTwoDigitNumber(value) {
    const upTo2Digits = value < 10 ? "0" + value : value.toString()

    return upTo2Digits
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {

    const currentMinutes = this.getMinutes(this.currentTime)
    const minutesUpTo2Digits = this.computeTwoDigitNumber(currentMinutes)

    const currentSeconds = this.getSeconds(this.currentTime)
    const secondsUpTo2Digits = this.computeTwoDigitNumber(currentSeconds)

    return `${minutesUpTo2Digits}:${secondsUpTo2Digits}`

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
