class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    },1000)
  }

  getMinutes() {
    let minute = Math.floor(this.currentTime / 60);

    return minute
  }

  getSeconds() {
    let second = this.currentTime % 60

    return second
  }

  computeTwoDigitNumber(value) {
    let stringToNumber = ""

    if (value <= 9) {
      stringToNumber = "0" + value.toString()
    }
    else {
      stringToNumber = value.toString()
    }

    return stringToNumber
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    let minute = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${minute}:${seconds}` 
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
