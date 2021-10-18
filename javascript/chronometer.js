class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (callback) callback()
    }, 1000);
  }
  getMinutes() {
    // ... your code goes here
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }
  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;
  }
  computeTwoDigitNumber(value) {
    // ... your code goes here
    let zero = '0';
    let doble = '';
    if (value < 10) {
      doble = zero + value.toString();
    } else {
      doble = value.toString();
    }
    return doble;
  }
  stop() {
    // ... your code goes here
    this.intervalId = clearInterval(this.intervalId);
  }
  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }
  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let timeStamp = `${minutes}:${seconds}`;
    return timeStamp;
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
