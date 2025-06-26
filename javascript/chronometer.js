class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMilliseconds = 0;
    this.millisecIntervalId = null;
  }

  start(callback) {
    // Milliseconds interval (10ms)
    this.millisecIntervalId = setInterval(() => {
      this.currentMilliseconds++;
      if (this.currentMilliseconds >= 100) {
        this.currentMilliseconds = 0;
      }
      if (callback) callback();
    }, 10);

    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime) % 60;
  }

  getMilliseconds() {
    return this.currentMilliseconds;
  }

  computeTwoDigitNumber(value) {
    return String(value).padStart(2, '0');
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecIntervalId);
    this.intervalId = null;
    this.millisecIntervalId = null;
  }

  reset() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
  }

  split() {
    const formatedMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const formatedSeconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${formatedMinutes}:${formatedSeconds}`;
  }

  // Separate logic to make the tests pass
  splitMilliseconds() {
    return this.computeTwoDigitNumber(this.getMilliseconds());
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
