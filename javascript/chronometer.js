class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {

    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(callback) callback();
    }, 10);
  }

  getMinutes() {
    return Math.floor((this.currentTime / 100) / 60);
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60);
  }

  getMilliSeconds() {
    return parseInt(String(this.currentTime).slice(-2));
  }

  computeTwoDigitNumber(value) {
    
    if (value.toFixed().length < 2) {
      return "0" + value;
    } else {
      return value.toFixed();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds()) + ":" + this.computeTwoDigitNumber(this.getMilliSeconds());
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
