class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.miliseconds = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.miliseconds = 0;
    }, 1000);
    this.miliInterval = setInterval(() => {
      this.miliseconds++;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }

  computeTwoDigitNumber(value) {
    value = value.toString();
    return value.length === 1 ? '0' + value : value;
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.miliInterval);
  }

  reset() {
    this.currentTime = 0;
    this.miliseconds = 0;
  }

  split() {
    let currentM = this.computeTwoDigitNumber(this.getMinutes());
    let currentS = this.computeTwoDigitNumber(this.getSeconds());
    return `${currentM}:${currentS}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
