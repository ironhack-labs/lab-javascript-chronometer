class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTime) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTime) {
        const minutes = this.computeTwoDigitNumber(this.getMinutes());
        const seconds = this.computeTwoDigitNumber(this.getSeconds());
        const milliSeconds = this.computeTwoDigitNumber(this.getMilliSeconds());
        printTime(minutes, seconds, milliSeconds);
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }
  getSeconds() {
    return Math.floor((this.currentTime % 6000) / 100);
  }
  getMilliSeconds() {
    return (this.currentTime % 6000) % 100;
  }

  computeTwoDigitNumber(value) {
    const stringValue = value.toString();
    return stringValue.padStart(2,0);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset(printTime) {
    this.currentTime = 0;
    if (printTime) {
      printTime('00', '00', '00');
    }
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const secondes = this.computeTwoDigitNumber(this.getSeconds());
    const milliSeconds = this.computeTwoDigitNumber(this.getMilliSeconds());
    return `${minutes}:${secondes}:${milliSeconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
