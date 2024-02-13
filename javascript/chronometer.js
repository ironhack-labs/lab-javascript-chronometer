class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        if (callback != null) {
          callback(this.currentTime);
        }
        printTime();
      }, 1000);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length < 2) {
      return "0" + value.toString();
    } else {
      return value.toString().slice(-2);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
    printTime();
    clearSplits();
  }

  split() {
    printSplit();
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
