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
      return this.currentTime
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

    printTime('00', '00', '00');
  }

  split() {

    const currentMinutes = this.getMinutes(this.currentTime)
    const minutesUpTo2Digits = this.computeTwoDigitNumber(currentMinutes)

    const currentSeconds = this.getSeconds(this.currentTime)
    const secondsUpTo2Digits = this.computeTwoDigitNumber(currentSeconds)

    const currentMiliseconds = this.getMiliseconds(this.currentTime)
    const milisecondsUpTo2Digits = this.computeTwoDigitNumber(currentMiliseconds)

    return `${minutesUpTo2Digits}:${secondsUpTo2Digits}:${milisecondsUpTo2Digits}`

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
