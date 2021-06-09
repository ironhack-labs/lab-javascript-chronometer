class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    }

  start(callback) {
      this.intervalID = setInterval(() => { 
        this.currentTime += 1 
      }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
    l
  }

  getSeconds() {
    return this.currentTime % 60
    }

  computeTwoDigitNumber(value) {
    
  }
  stop() {
    clearInterval(this.intervalID)
    
  } 

  reset() {
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
