class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 10;
      if (callback) {
        callback();
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60000);
  }

  getSeconds() {
    return Math.floor((this.currentTime % 60000) / 1000);
  }

  getMilliseconds() {
    return (this.currentTime % 60000) % 1000;
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, `0`);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.getMilliseconds().toString().padStart(3, `0`)}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}