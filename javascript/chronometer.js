class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    },1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime%60;
    return seconds;
  }

  computeTwoDigitNumber(number) {
    let twoDigits = ("00" + number).slice(-2);
    return twoDigits;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let minutes = this.computeTwoDigitNumber(this.getMinutes());

    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
