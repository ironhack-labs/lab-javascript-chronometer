class Chronometer {
  constructor() {
    this.currentTime = 55;
    this.intervalId = null;
  }

  start(callback) {
    if (callback) {
      callback();
    }

    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
      console.log(this.split());
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    const minutesToSeconds = this.getMinutes() * 60;
    return this.currentTime - minutesToSeconds;
  }

  computeTwoDigitNumber(value) {
    let result = '';
    if (value < 10) {
      result = `0${value}`;
    } else {
      result = `${value}`;
    }
    return result;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const currentMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const currentSeconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${currentMinutes}:${currentSeconds} `;
  }
}
const stopwatch = new Chronometer();

stopwatch.start();

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
