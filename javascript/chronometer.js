class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId =  null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;

      if (callback) { // Check if a callback was passed
        callback();   // If it exists, execute it
      }
    }, 1000); // 1000 ms = 1 second
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}