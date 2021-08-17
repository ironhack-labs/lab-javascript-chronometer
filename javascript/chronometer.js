class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliseconds = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.milliseconds++;
      if (this.milliseconds == 100){
        this.currentTime++;
        this.milliseconds = 0;
      }
      if (callback) {
        callback();
      }
    }, 10);
  }

  getMilliseconds() {
    return this.milliseconds;
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    value = value.toString();
    if (value.length !== 2) {
      return '0' + value[0];
    }
    return value;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds());
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
