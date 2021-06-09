class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    }

  start(callback) {
      this.intervalID = setInterval(() => { 
        this.currentTime += 1 
        callback()
      }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime % 60
    }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2,0)
  }
  stop() {
    clearInterval(this.intervalID)
    
  } 

  reset() {
    this.currentTime = 0;
    }

  split() {
    let mins = this.getMinutes()
    let secs = this.getSeconds()
    return (this.computeTwoDigitNumber(mins) + ':' + this.computeTwoDigitNumber(secs))

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
