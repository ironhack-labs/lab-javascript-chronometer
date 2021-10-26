class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.miliseconds = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.miliseconds = 0;
    }, 1000);
    this.miliInterval = setInterval(() => {
      this.miliseconds++;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime -this.getMinutes() * 60;
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, "0")
  }

  stop() {
    return clearInterval (this.intervalId)
  }

  reset() {
    this.currentTime = 0;
    return this.currentTime;
  }

  split() {
    return ((this.computeTwoDigitNumber(this.getMinutes()))+":"+(this.computeTwoDigitNumber(this.getSeconds())));
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
