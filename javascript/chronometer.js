class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  };

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      }, 1000
    )
  };

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
  };

  getSeconds() {
    // ... your code goes here
    return this.currentTime - (this.getMinutes() * 60)
  };

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let newValue = value.toString()
    if (newValue.length === 1) {
      return "0" + newValue
    }
    return newValue
  };

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  };

  reset() {
    // ... your code goes here
    this.currentTime = 0
  };

  split() {
    // ... your code goes here
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())    
  };
};

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
