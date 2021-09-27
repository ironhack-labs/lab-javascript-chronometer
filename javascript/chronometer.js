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
    let currentMins = Math.floor(this.currentTime / 60);
    return currentMins;
  }

  getSeconds() {
    let currentSecs = Math.floor(this.currentTime % 60)
    return currentSecs;
  }

  computeTwoDigitNumber(value) {
    // if i start from end ,the first index will be -1 we want to reach second one.
    var twoDigitedNum = ("0" + value).slice(-2);
    return twoDigitedNum;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let mins = this.computeTwoDigitNumber(this.getMinutes());
    let secs = this.computeTwoDigitNumber(this.getSeconds());
    return `${mins}:${secs}`;
  }

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
