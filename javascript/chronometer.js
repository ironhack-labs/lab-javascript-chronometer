class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentCentiTime = 0;
    this.centiIntervalId = null;
  }

  start(callback = null) {
    if (!callback) {
      callback = () => this.currentTime++;
    }
    this.intervalId = setInterval(callback, 1000);
    this.centiIntervalId = setInterval(() => this.currentCentiTime++, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getCentiSeconds() {
    return this.currentCentiTime % 100;
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? '0' + String(value) : String(value);
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.centiIntervalId);
  }

  reset() {
    this.currentTime = 0;
    this.currentCentiTime = 0;
  }

  split() {
    return (
      this.computeTwoDigitNumber(this.getMinutes) +
      ':' +
      this.computeTwoDigitNumber(this.getSeconds)
    );
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
