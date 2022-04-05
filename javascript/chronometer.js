class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof callback === 'function') {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.round(Math.floor(this.currentTime / 60));
    //i can't seem to find the last solution of this test
  }

  getSeconds() {
    return this.currentTime % 60;
    // i can't seem to find the last solution of this test
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      value = '0' + value;
    }
    return String(value);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return (this.currentTime = 0);
  }

  split() {
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
