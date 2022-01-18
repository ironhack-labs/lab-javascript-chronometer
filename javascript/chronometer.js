class Chronometer {
  constructor() {

    this.currentTime = 0
    this.intervalId = null

  }

  start(callback) {
    this.intervalID = setInterval(() => {
      this.currentTime++
    }, 1000)
  }


  getMinutes() {

    let passedMinutes = 0
    const minutesWithDecimals = this.currentTime / 60

    passedMinutes = Math.trunc(minutesWithDecimals)

    return passedMinutes



  }

  getSeconds() {
    const secondsWithDecimals = this.currentTime % 60
    return secondsWithDecimals
  }

  computeTwoDigitNumber(value) {

    if (value < 10) {
      return `0${value}`
    } else {
      return `${value}`
    }

  }


  stop() {

    clearInterval(this.intervalID)
  }

  reset() {
    clearInterval(this.currentTime = 0)

  }

  split() {

    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`

  }





}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
