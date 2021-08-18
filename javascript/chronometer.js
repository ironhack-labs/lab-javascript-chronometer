class Chronometer {
  constructor() {
    this.currentTime = 0; //millis
    this.displayMillis = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.displayMillis += 10;
      this.currentTime += 10;
      if (this.displayMillis > 990) {
        this.displayMillis = 0;
      }
      callback();
    }, 10);
  }

  getMilliseconds() {
    return this.computeTwoDigitNumber(this.displayMillis, true);
  }

  getSeconds() {
    return this.computeTwoDigitNumber(
      Math.floor((this.currentTime % 60000) / 1000)
    );
  }

  getMinutes() {
    return this.computeTwoDigitNumber(Math.floor(this.currentTime / 60000));
  }

  computeTwoDigitNumber(value, isMilli) {
    if (isMilli) {
      return value > 99
        ? `${(value / 10).toFixed(0)}`
        : `0${(value / 10).toFixed(0)}`;
    }
    return value < 10 ? `0${value}` : `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.displayMillis = 0;
  }

  split() {
    return `${this.getMinutes()}:${this.getSeconds()}:${this.getMilliseconds()}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
