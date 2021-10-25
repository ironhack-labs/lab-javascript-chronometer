class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start() {
    this.intervalId = setInterval(() => {
      return this.currentTime ++
    }, 1000);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    const seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    const digitNumber = value.toString();
    if (digitNumber.length === 2) {
      return digitNumber;
    } else {
      return `0${digitNumber}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
