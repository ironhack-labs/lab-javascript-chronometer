class Chronometer {
  constructor(currentTime = 0, intervalId = null) {
    this.currentTime = currentTime;
    this.intervalId = intervalId;
  }

  start(callback = undefined) {
    if(!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        callback && callback();
        printTime();
      }, 10)
    }
  }

  getMinutes() {
    return Math.floor((this.currentTime / 100) / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  getMiliSeconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0');
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
