class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      callback();
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 100 / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  getMilliseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString();
    if (stringValue.length === 1) {
      return `0${stringValue}`;
    }
    return stringValue;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset(callback) {
    this.currentTime = 0;
    callback();
  }

  getSplit() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}:${this.computeTwoDigitNumber(this.getMilliseconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
