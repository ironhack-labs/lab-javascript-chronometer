class Chronometer {
  constructor(currentTime, intervalId) {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback) {
        callback();
      }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    let minutes = this.currentTime / 60;
    minutes = Math.floor(minutes);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime / 60;
    minutes = Math.floor(seconds);
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
    return (this.currentTime = 0);
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
