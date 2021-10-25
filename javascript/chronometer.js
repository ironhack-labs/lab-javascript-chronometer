class Chronometer {
  constructor() {
    (this.currentTime = 0), (this.intervalId = null);
  }
  start() {
    const currentTime = setInterval(() => {
      return this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    const numbersMinutes = Math.floor(this.currentTime / 60);
    return numbersMinutes;
  }
  getSeconds() {
    const numbersMinutes = Math.floor(this.currentTime % 60);
    return numbersMinutes;
  }
  computeTwoDigitNumber(value) {
    const valueString = value.toString();
    if (valueString.length < 2) {
      return `0${valueString}`;
    } else {
      return valueString;
    }
  }
  stop() {}
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
