class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback !== undefined) {
        callback();
      }

      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    const secondsToMinutes = Math.floor(this.currentTime / 60);
    return secondsToMinutes;
  }

  getSeconds() {
    const numberOfSeconds = this.currentTime % 60;
    return numberOfSeconds;
  }

  computeTwoDigitNumber(value) {
    const minuteAndTime = value;
    const stringTime = minuteAndTime.toString();

    if (stringTime <= 9) {
      return '0' + stringTime.slice(-2);
    } else {
      return stringTime;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
