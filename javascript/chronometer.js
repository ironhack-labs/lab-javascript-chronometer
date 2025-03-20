class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
    this.intervalId = null;
    this.millisecondsintervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);

    this.millisecondIntervalId = setInterval(() => {
      this.currentMilliseconds += 10;
      if (this.currentMilliseconds >= 1000) {
        this.currentMilliseconds = 0;
      }
      if (callback) callback();
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds() {
    return Math.floor(this.currentMilliseconds / 10);
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? "0" + value : value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondIntervalId);
    this.intervalId = null;
    this.millisecondIntervalId = null;
  }

  reset() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    // const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
