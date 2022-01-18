class Chronometer {
  constructor() {}
  currentTime = 0;
  intervalId = null;
  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) callback(this.currentTime);
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return (this.currentTime = 0);
  }

  split() {
    if (this.getMinutes() < 10 || this.getSeconds < 10) {
      return (
        this.computeTwoDigitNumber(this.getMinutes()) +
        ':' +
        this.computeTwoDigitNumber(this.getSeconds())
      );
    } else {
      return this.getMinutes() + ':' + this.getSeconds();
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
