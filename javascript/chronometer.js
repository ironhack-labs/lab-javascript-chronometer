class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start() {
   this.intervalId = setInterval(() => {
     return this.currentTime++
   }, 1000);
  }

  getMinutes() {
    return Math.floor (this.currentTime/60);
  }

  getSeconds() {
    return (this.currentTime%60);
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let mm = this.computeTwoDigitNumber(this.getMinutes())
    let ss = this.computeTwoDigitNumber(this.getSeconds())
    return `${mm}:${ss}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
