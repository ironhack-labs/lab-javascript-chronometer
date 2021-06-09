class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null

  }

  start(callback) {

    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if (callback != undefined) {
        callback()
      }
    }, 1000)
  }
  //80
  getMinutes() {
    // return (this.currentTime = 60 === 1 || this.currentTime = 0 ===
    let minutes = this.currentTime / 60
    if (this.currentTime <= 0) {
      return 0

    } else if (this.currentTime === 60) {
      return 1
    } else {
      return minutes
    }

  }

  getSeconds() {
    let secondsRemaining
    secondsRemaining = this.currentTime % 60
    return secondsRemaining

    //20
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {

    if (value < 10) {
      return value = `0` + value
    } else if (value >= 10) {
      return value.toString()
    }

  }

  stop() {


    clearInterval(this.intervalId)
    console.log(this.currentTime)
    return this.currentTime




    // ... your code goes here
  }

  reset() {
    return this.currentTime = 0
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
