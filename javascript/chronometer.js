class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    },10)
  }

  getMinutes() {
    let minute = Math.trunc(this.currentTime / 6000);
    return minute;
  }

  getSeconds() {
    let second = Math.trunc((this.currentTime / 100) % 60);
    return second;
  }

  getMilliseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    let digit = String(value);
    if(digit.length === 1) {
      return '0' + digit;
    } else {
      return digit;
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.currentTime = 0;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let millisecond = this.computeTwoDigitNumber(this.getMilliseconds());
    let second = this.computeTwoDigitNumber(this.getSeconds());
    let minute = this.computeTwoDigitNumber(this.getMinutes()); 
    return `${minute}:${second}:${millisecond}`;
    
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
