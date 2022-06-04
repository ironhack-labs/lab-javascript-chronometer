class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    if(callback) {
      callback() 
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime += 1
      }, 1000);
    }
    
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
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
    return this.computeTwoDigitNumber( this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds())
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
