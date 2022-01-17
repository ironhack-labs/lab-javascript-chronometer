class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback();
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    if (this.currentTime < 60) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 60);
    }
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime % 60 === 0) {
      return 0;
    } else {
      return this.currentTime % 60;
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
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
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds().toFixed(0))}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
