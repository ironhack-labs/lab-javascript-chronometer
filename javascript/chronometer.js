class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliseconds = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.milliseconds++;
      if (this.milliseconds >= 100) {
        this.milliseconds = 0;
        this.currentTime++;
      }
    }, 10);
    return callback;
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    let minutes = this.getMinutes();

    return this.currentTime - minutes * 60;
  }

  getMilliseconds() {
    return this.computeTwoDigitNumber(this.milliseconds);
  }

  computeTwoDigitNumber(value) {
    if (value < 10) value = `0${value}`;
    return `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    //let miliseconds = this.getMilliseconds()
    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}