class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    if (callback) {
      this.intervalId = setInterval(callback,1000)
    } else {
      this.intervalId = setInterval(()=> {
        this.currentTime += 1
      }, 1000)  
    }
  }

  getMinutes() {

   return Math.round(Math.floor(this.currentTime)/60)
  }

  getSeconds() {
    return Math.round(Math.floor(this.currentTime) % 60)
  }

  computeTwoDigitNumber(value) {
   // no sé cómo decirle que cualquier valor que reciba le añada un 0
     parseFloat(this.getMinutes).toFixed(2);
     parseFloat(this.getSeconds).toFixed(2);
  }

  stop() {
    // ... your code goes here
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
