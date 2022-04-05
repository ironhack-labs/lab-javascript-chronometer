class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return Math.round(this.currentTime / 60);
    //i can't seem to find the last solution of this test
  }

  getSeconds() {
    let holdValue = 0;
    if (this.currentTime % 60 === 0) {
      return (holdValue = this.currentTime);
    }
    return this.currentTime - holdValue;
    // i can't seem to find the last solution of this test
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      value = '0' + value;
    }
    return String(value);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return (this.currentTime = 0);
  }

  split() {
    // I'll write this one when i have correctly written getSeconds and getMinutes. please give feedback about those 2.
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
