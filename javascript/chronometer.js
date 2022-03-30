class Chronometer {

  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }


  start(callback) {

    this.intervalId = setInterval((callback) => {
      this.currentTime++
      if (callback) {
        callback()
      }
    }, 1000)

  }



  getMinutes() {
    return parseInt(this.currentTime / 60)
  }


  getSeconds() {
    return this.currentTime % 60
  }


  computeTwoDigitNumber(value) {
    let twoDigits

    if (value >= 10) {
      twoDigits = value.toString()
    } else {
      twoDigits = '0' + value
    }

    return twoDigits
  }

  stop() {
    clearInterval(this.intervalId)
  }



  reset() {
    this.currentTime = 0
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
