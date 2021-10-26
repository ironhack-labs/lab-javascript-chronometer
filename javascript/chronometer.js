class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(callback) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 1000);
  }

  getMinutes() {
    let howManyMinutes = this.currentTime / 60;
    let totalMinutes = Math.floor(howManyMinutes) 
    
    return totalMinutes;
    
  }

  getSeconds() {
    
    if (this.currentTime === 0) {
      return 0;
    }
    
    let howManySeconds = 0;
    if (this.currentTime > 60) {
      howManySeconds = this.currentTime % 60;
    }
    return howManySeconds;

  }

  computeTwoDigitNumber(value) {
    
    let paddedValue = ('0'+value).slice(-2);
    return paddedValue;

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
