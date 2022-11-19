class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(callback) {
    if (!callback) {
      return
    }

    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
    }, 10);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 100 / 60)
    return minutes
  }

  getSeconds() {
    const secondsLeft = (this.currentTime / 100) % 60
    return secondsLeft.toFixed(0)
  }

  getMiliseconds() {
    const miliseconds = this.currentTime % 100
    return miliseconds
  }

  computeTwoDigitNumber(value) {
    const upTo2Digits = value < 10 ? "0" + value : value.toString()

    return upTo2Digits
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {

    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    const miliseconds = this.computeTwoDigitNumber(this.getMiliseconds())

    return `${minutes}:${seconds}:${miliseconds}`

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
