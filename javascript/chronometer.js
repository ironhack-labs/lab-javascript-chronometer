class Chronometer {
  constructor() {
    this.currentTime = 0; //Seconds
    this.intervalId = null;
  }

  start(callback) {
    if (callback) {
      callback();
    } else {
      this.intervalId = setInterval(() => this.currentTime++, 1000);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : '' + value;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {

    let strMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let strSeconds = this.computeTwoDigitNumber(this.getSeconds());
    
    return `${strMinutes}:${strSeconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
