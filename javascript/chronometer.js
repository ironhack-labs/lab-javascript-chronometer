class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    const intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
    },1000);
  }

  getMinutes() {
   return this.currentTime = this.time++ / 60;
  }

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (this.currentTime() <10 {
      return '0' + this.currentTime();
    }
    return this.currentTime();
    // return value.padStart(2, "0");

  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
   this.currentTime = 0;
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
