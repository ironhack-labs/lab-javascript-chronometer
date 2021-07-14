class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentmilliseconds = 0;
    this.intervalId = null;
    this.millisIntervalId = null;
  }

  start(callback, interval) {
    if (typeof callback === "function") {
      setInterval(callback, interval);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);

      this.millisIntervalId = setInterval(() => {
        this.currentmilliseconds++;
      }, 1);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return '0' + value
    }
    return '' + value
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisIntervalId);
  }

  reset() {
    this.currentTime = 0;
    this.currentmilliseconds = 0;
    this.intervalId = null;
    this.millisIntervalId = null;
  }

  getMilliSeconds() {
    const value = this.currentmilliseconds;
    const length = ("" + value).length
    if (length === 1) {
      return '0' + value;
    } else {
      return ("" + value).slice(-2);
    }
  }

  split() {
    const minStr = this.computeTwoDigitNumber(this.getMinutes());
    const secStr = this.computeTwoDigitNumber(this.getSeconds());
    const milStr = this.computeTwoDigitNumber(this.getMilliSeconds());
    return `${minStr}:${secStr}:${milStr}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
