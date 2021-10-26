class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  //iteracion uno-> Done

  start(callback) {
    this.intervalId = setInterval(() => { this.currentTime++ }, 1000);
  }
  // iteration dos -> Done

  getMinutes() {

    return Math.floor(this.currentTime / 60)

  }
  // iteration three -> Done

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }
  // iteration four -> Done

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value
    } else {
      return value.toString()
    }
    // iteration five -> Done

  }

  stop() {

    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
    

    // console.log(min)
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
