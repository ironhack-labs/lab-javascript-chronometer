class Chronometer {
  constructor() {
    (this.currentTime = 0), (this.intervalId = null);
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    let minutes = 0;
    if (this.currentTime === 0) {
      return 0;
    } else if ((this.currentTime = 60000)) {
      return (minutes += 1);
    }
    return minutes;
  }

  getSeconds() {
    // return this.currentTime;
  }

  computeTwoDigitNumber(value) {}

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
