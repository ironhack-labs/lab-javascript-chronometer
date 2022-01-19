class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      if (callback) {
        return callback;
      }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let minute = this.currentTime / 60;
    return Math.trunc(minute);
  }
  getSeconds() {
    let second = this.currentTime % 60;
    return Math.trunc(second);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    if (value >= 0 && value < 10) {
      return String('0' + value);
    } else if (value >= 60) {
      return String('00');
    } else {
      return String(value);
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const countMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const countSeconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${countMinutes}:${countSeconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
