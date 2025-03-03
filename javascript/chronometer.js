class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    // ... your code goes here
    let startTime = Date.now();
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        const now = Date.now();
        const timePassed = now - startTime;
        this.currentTime +=  timePassed;
        startTime = now;
        if (callback) {
          callback();
        }
      }, 10)
    }
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60000);
  }

  getSeconds() {
    // ... your code goes here
      return Math.floor(this.currentTime / 1000) % 60;
  }

  getMilliseconds() {
    return this.currentTime % 1000;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return `0${value}`;
    } else {
      return value.toString()
    }
  }

  stop() {
    // ... your code goes here
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    // ... your code goes here
    this.stop();
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(Math.floor(this.getMilliseconds() / 10))}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
