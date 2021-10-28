
class Chronometer {
  constructor(currentTime, intervalId) {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
  console.log(this)
}, 1000);
  }

  getMinutes() {
    this.currentTime = Math.round(currentTime / 60);
    console.log(this)
  }

  getSeconds() {
    Let secondsLeft = this.currentTime - getMinutes * 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    this.intervalId = clearInterval(intervalId)
  }

  reset() {
    // ... your code goes here
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
