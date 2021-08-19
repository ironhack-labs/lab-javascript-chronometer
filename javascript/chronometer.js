class Chronometer {
  constructor() {
    // this.currentTime = 0;
    this.currentTime = 1196;
    // this.currentTime = 592;
    // this.currentTime = 117;
    // this.currentTime = 56;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      callback ? callback() : null;
      this.currentTime += 1;
      if (callback) {
        callback();
      }
      console.log(this.currentTime);
    }, 1000);
    return this.intervalId;
  }

  getMinutes() {
    if (this.currentTime >= 60) {
      return Math.floor(this.currentTime / 60);
    }
    return 0;
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return '0' + value;
    }
    return `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
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
