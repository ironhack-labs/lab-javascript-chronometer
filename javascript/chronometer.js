class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    // ... your code goes here
    if(!callback){
      this.intervalId = setInterval( () => this.currentTime++,10)
    } else {
      this.intervalId = setInterval(callback,10)
    }
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/(60*100))
  }

  getCentiseconds() {
    // ... your code goes here
    return this.currentTime % 100
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime/100)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return String(value).padStart(2, '0')
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
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
