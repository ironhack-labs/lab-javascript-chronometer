class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentMillis = 0;
    this.intervalId = null;
    this.millisIntervalId = null;
  }

  start(callback, interval) {
    if (typeof callback === 'function') {
      setInterval(callback, interval);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);

      this.millisIntervalId = setInterval(() => {
        this.currentMillis++;
      }, 1);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisIntervalId);
  }

  reset() {
    this.currentTime = 0;
    this.currentMillis = 0;
    this.intervalId = null;
    this.millisIntervalId = null;
  }

  getMilliSecond() {
    const value = this.currentMillis;
    const length = ('' + value).length;
    if (length === 1) {
      return '0' + value;
    } else {
      return ('' + value).slice(-2);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    const length = ('' + value).length;
    return length === 1 ? '0' + value : '' + value;
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
