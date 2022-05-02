class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++ 
      if (callback !== undefined) callback();
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    const stringValue = `${value}`;
    return stringValue.length < 2 ? `0${stringValue.slice(-2)}` : stringValue;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
  this.currentTime = 0;
  }

  split() {
    const fixedMin = this.computeTwoDigitNumber(this.getMinutes())
    const fixedSec = this.computeTwoDigitNumber(this.getSeconds())
    return `${fixedMin}:${fixedSec}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
