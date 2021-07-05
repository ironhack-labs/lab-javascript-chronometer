class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentMillis = 0;
    this.intervalId = null;
    this.millisIntervalId = null;
  }

  start(callback) {
    if (typeof callback === "function") {
      this.intervalId = setInterval(callback, 1);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        this.millisIntervalId = setInterval(() => {
          this.currentMillis += 1
        }, 1);
      }, 1000);
    }
  }

  getMilliSecond() {
    const value = this.currentMillis;
    const length = ("" + value).length
    if (length === 1) {
      return '0' + value;
    } else {
      return ("" + value).slice(-2);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    const length = ("" + value).length
    return length === 1 ? '0' + value : '' + value;
  }

  stop() {
    for (var i = 1; i < 99999; i++)
      window.clearInterval(i);
  }

  reset() {
    this.currentTime = 0;
    this.currentMillis = 0;
    this.intervalId = null;
    this.millisIntervalId = null;
  }

  split() {
    const minStr = this.computeTwoDigitNumber(this.getMinutes());
    const secStr = this.computeTwoDigitNumber(this.getSeconds());
    const milStr = this.computeTwoDigitNumber(this.getMilliSecond());
    return `${minStr}:${secStr}:${millis}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
