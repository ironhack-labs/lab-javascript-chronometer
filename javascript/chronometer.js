class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (callback) {
      this.intervalId = setInterval(() => {
        callback;
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);
      console.log('started!');
    }
  }

  getMinutes() {
    return parseInt(this.currentTime / 60);
  }

  getSeconds() {
    if (this.currentTime != 0) {
      return parseInt(this.currentTime % 60);
    } else {
      return 0;
    }
  }

  computeTwoDigitNumber(value) {
    let string = value.toString();
    if (string.length < 2) {
      return `0${string}`;
    } else {
      return string;
    }
  }

  stop() {
    clearInterval(this.intervalId);
    console.log('stopped!');
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
