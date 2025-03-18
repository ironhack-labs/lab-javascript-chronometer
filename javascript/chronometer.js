class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliseconds = 0;
    this.milliIntervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);

    this.milliIntervalId = setInterval(() => {
      this.milliseconds = (this.milliseconds += 1) % 100;
      if (callback) callback();
    }, 10);
  
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }
  getMilliseconds() {
    return this.milliseconds;
  }

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.milliIntervalId);
    this.intervalId = null;
    this.milliIntervalId = null;
  }

  reset() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }

  split() {
    return (
      this.computeTwoDigitNumber(this.getMinutes()) +
      ':' +
      this.computeTwoDigitNumber(this.getSeconds()) + ':' + this.computeTwoDigitNumber(this.getMilliseconds())
    );
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
