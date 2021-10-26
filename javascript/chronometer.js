class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null

  }

  start() {
    this.intervalId = setInterval(() => {
      this.currentTime++
      return this.currentTime;
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
    let stringNumber = value.toString();
    // switch (value) {
    //   case stringNumber.length = 1:
    //     return `0${stringNumber}`; //'0'+stringNumber
    //   case stringNumber.length = 2:
    //     return stringNumber
    // }
    if (stringNumber.length === 1) {
      return `0${stringNumber}`;
    } else {
      return stringNumber
    }

  }

  stop() {

    clearInterval(this.intervalId)
  }

  reset() {
    clearInterval()
    this.currentTime = 0
  }

  split() {
    let twoDigiMin = this.computeTwoDigitNumber(this.getMinutes());
    let twoDigiSec = this.computeTwoDigitNumber(this.getSeconds());
    return `${twoDigiMin}:${twoDigiSec}`;

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
