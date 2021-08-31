class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    this.milliseconds = 0;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.milliseconds++;
      if (this.milliseconds >= 100) {
        this.milliseconds = 0;
        this.currentTime++;
      }
    }, 10);
    return callback;
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    let minutes = this.getMinutes();

    return this.currentTime - minutes * 60;
  }

  getMilliseconds() {
    return this.computeTwoDigitNumber(this.milliseconds);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) value = `0${value}`;
    return `${value}`;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    this.milliseconds = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    // let milliseconds = this.getMilliseconds()
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
