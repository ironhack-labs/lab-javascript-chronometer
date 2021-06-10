class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      callback();
    }, 1000);
  }

  getMinutes() {
    //divided the current time(total of secondes passed) by 60
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    //the number of seconds that have passed after the start of current minute => after 60sec
    let secondes = this.currentTime % 60;
    return secondes;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return value.toString();
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
