class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {

    this.intervalId = setInterval(() => {
      if (callback !== undefined) {
        callback()
      }
      this.currentTime += 1
    }, 10);  
  }

  getMinutes() {
    // return minutes from milliseconds
    return Math.floor((this.currentTime / 100) / 60)
  }

  getSeconds() {
    // return seconds from milliseconds
    return Math.floor((this.currentTime / 100) % 60)
  }

  getMiliseconds() {
    return this.currentTime % 100
  }
 
  computeTwoDigitNumber(value) {
    return String(value < 10 ? `0${value}` : value)
  }

  stop() {
     clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber( this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds()) + ':' + this.computeTwoDigitNumber(this.getMiliseconds())
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
