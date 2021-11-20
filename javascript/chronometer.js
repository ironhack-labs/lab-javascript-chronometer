class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{ this.currentTime++; },10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(Math.floor(this.currentTime/100) / 60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime/100) - this.getMinutes() * 60;
  }

  getMilliseconds() {
    // ... your code goes here
    return this.currentTime - this.getSeconds()*100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value < 10 ? "0"+value : value.toString();
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
