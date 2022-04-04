class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;

  }

  start(callback) {
    setInterval(() => {
      return this.currentTime++;
    },1000);
    
  }

  getMinutes() {
    this.minutes = 0;
    setInterval(() => {
      return this.minutes++;
    },60 * 1000);
    return this.minutes;

  }

  getSeconds() {
  this.seconds = 0;
  return this.seconds;
  }

  computeTwoDigitNumber(value) {
  
  }

  stop() {
  
  }

  reset() {
    
  }

  split() {
    
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
