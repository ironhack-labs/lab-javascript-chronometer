class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback && callback(this.getMinutes(), this.getSeconds());
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    return String(value).padStart(2, 0);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
