class Chronometer {
  constructor() {
    this.currentTime = 0; // second
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    if (!this.currentTime) return 0;
    if (this.currentTime) {
      return this.currentTime < 60 ? this.currentTime : this.currentTime % 60;
    }
  }

  computeTwoDigitNumber(number) {
    if (number > 9) return number + '';
    if (number < 10) {
      let stringNumber = number + '';
      return stringNumber.padStart(2, '0');
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.getMinutes();
    this.getSeconds();
    this.computeTwoDigitNumber();
    return this.currentTime = 0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }

  // getMillisecond() {
  //   (this.currentTime * 1000 )/10
  // }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
