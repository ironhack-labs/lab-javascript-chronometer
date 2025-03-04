class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (callback) callback();
    this.intervalId = setInterval(() => {
      return this.currentTime++;
    }, 1000);
    this.intervalId = setInterval();
  }
  

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    }
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    zeroDigits = `0${value}`;
    return zeroDigits.slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
    document.getElementsByClassName('numbers').innerHTML = '00:00';
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


