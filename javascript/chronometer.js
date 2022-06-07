class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here

    this.intervalId = setInterval(() => { // arrow para que funcione el this
      this.currentTime++

    }, 1000)

    return this.intervalId
  }

  getMinutes() {
    // ... your code goes here
    let minutes = this.currentTime / 60
    return Math.floor(minutes)
  }

  getSeconds() {
    // ... your code goes here
    let Seconds = this.currentTime % 60
    return Seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value - 10 <= 0) {
      let stringNumber = value.toFixed(0)
      let ceroNumber = '0' + stringNumber
      return ceroNumber
    }
    else {
      return value.toFixed(0)
    }
  }


  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let splitedTime = ''

    return splitedTime + this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds())


  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
