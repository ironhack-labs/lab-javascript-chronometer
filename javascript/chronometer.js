class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  getSimpleTime() {
    return this.currentTime;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) { callback() };
    }, 1000);

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return (this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return "" + value;
    }
  }


  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let totalMin = this.getMinutes(this.currentTime);
    let totalSec = this.getSeconds(this.currentTime);
    totalMin = this.computeTwoDigitNumber(totalMin);
    totalSec = this.computeTwoDigitNumber(totalSec);
    let totalReturn = `${totalMin}:${totalSec}`
    return totalReturn;
  }


}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
