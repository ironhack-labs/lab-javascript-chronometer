class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
    // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000);
    // ... your code goes here
  }

  getMinutes() {
    if (this.currentTime === 0) return 0

    if (this.currentTime / 60 > 0) return Math.floor(this.currentTime / 60)
    // ... your code goes here
  }

  getSeconds() {
    if (this.currentTime >= 60) {
      return Math.floor(this.currentTime % 60)
    } return this.currentTime
    // ... your code goes here
  }

  computeTwoDigitNumber(numero) {

    if (numero.toString().length < 2) {
      return "0" + numero
    }
    else { return numero.toString() }
    // ... your code goes here[]
  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0
    // ... your code goes here
  }

  split() {
    let minutes = this.getMinutes()
    let seconds = this.getSeconds()
    let secondsFormate = this.computeTwoDigitNumber(seconds)
    let minutesFormate = this.computeTwoDigitNumber(minutes)

    return minutesFormate + ":" + secondsFormate
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
