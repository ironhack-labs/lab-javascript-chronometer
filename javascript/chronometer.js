class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.milliIntervalId = 0;
    this.milliCurrentTime = 0;
    this.milliseconds = 0;
    this.intervalId = null;

    // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof callback === 'function') {
        callback();
      }
    }, 1000);
    // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)(this.currentTime / 60) | 0;
    // ... your code goes here
  }

  getSeconds() {
    this.currentTime % 60;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value < 10 ? `0${value}` : value;
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;

    // ... your code goes here
  }

  reset() {
    if (this.intervalId) return;
    this.currentTime = 0;

    // ... your code goes here
  }

  split() {
    const baseMinutes = this.getMinutes();
    const baseSeconds = this.getSeconds();
    const paddedMinutes = this.computeTwoDigitNumber(baseMinutes);
    const paddedSeconds = this.computeTwoDigitNumber(baseSeconds);
    return `${paddedMinutes} : {paddedSeconds}`;

    // outra maneira de fazer
    // ${this.computeTwoDigitNumber(
    //  this.getMinutes()
    //  )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
