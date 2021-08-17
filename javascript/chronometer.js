
class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {

    this.intervalId = setInterval(() => {
      this.currentTime++
      if (callback) {
        callback()
      }
      // return (this.currentTime)

    }, 1000)

    // console.log(this.currentTime);
    // started => this.currentTime++;

    // ... your code goes here
  }

  getMinutes() {

    return Math.floor(this.currentTime / 60)

    // ... your code goes here
  }

  getSeconds() {

    return Math.floor(this.currentTime % 60)


    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return ("0" + value)
    } else {
      return value.toString()
    }
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId)


    // ... your code goes here
  }

  reset() {

    this.currentTime = 0
    // ... your code goes here
  }

  split() {

    return (this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds()))
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
