class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMilli = 0;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      if (callback) {
        callback();
      }
      this.currentMilli++;
      if (this.currentMilli === 100) {
        this.currentTime++;
        this.currentMilli = 0;
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  getMilli() {
    return this.currentMilli;
  }
  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value.toString().length === 1) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here

    this.currentTime = 0;
    this.currentMilli = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
