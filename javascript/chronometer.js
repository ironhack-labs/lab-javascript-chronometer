class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (printTimeCallback) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        printTimeCallback(this.getMinutes(), this.getSeconds());
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? '0' + value.toString() : value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset(printTimeCallback) {
    this.currentTime = 0;
    if (printTimeCallback) {
      printTimeCallback(0, 0);
    }
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return minutes + ':' + seconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
