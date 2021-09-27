class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (callback) {
      callback();
    } else {
      this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000)
    }
  }

  getMinutes() {
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return '0' + value;
    } else {
      return '' + value;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let minutesClock = this.computeTwoDigitNumber(this.getMinutes());
    let secondsClock = this.computeTwoDigitNumber(this.getSeconds());
    return minutesClock + ':' + secondsClock;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
