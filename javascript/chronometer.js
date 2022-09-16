class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.milliseconds = 0;
    this.intervalId = 0;
    this.milliIntervalId = 0;
  }
  startClick(callback, milliCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      callback();
    }, 1000);

    this.milliIntervalId = setInterval(() => {
      this.milliseconds += 1;
      milliCallback();
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(value) {
    let num = '0' + value;
    return num.slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.milliIntervalId);
  }
  resetClick() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let twoDigitMin = this.twoDigitsNumber(min);
    let twoDigitSec = this.twoDigitsNumber(sec);
    let twoDigitMilli = this.twoDigitsNumber(this.milliseconds);

    return `${twoDigitMin}:${twoDigitSec}:${twoDigitMilli}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
