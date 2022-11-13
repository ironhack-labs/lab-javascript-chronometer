class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (callback) {
      this.intervalId = setInterval(callback, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);
    }
  }

  getMinutes() {
    const minuts = Math.floor(this.currentTime / 60);
    return minuts;
  }

  getSeconds() {
    const secs = Math.floor(this.currentTime % 60);
    return secs;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0` + value;
    }
    return value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.currentTime.innerHTML;
  }

  split() {
    let minutes = this.getMinutes(this.currentTime);
    let digitMinutes = this.computeTwoDigitNumber(minutes);
    let seconds = this.getSeconds(this.currentTime);
    let digitseconds = this.computeTwoDigitNumber(seconds);
    return `${digitMinutes}:${digitseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
