class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 10;

      if (callback) {
        callback();
      }
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60000)
    // return Math.floor(this.currentTime % 600000);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 1000) % 60;
  }

  getTensOfMilliSeconds() {
    return Math.floor(this.currentTime / 10) % 100;
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString();
    return stringValue.length === 2 ? stringValue : "0" + stringValue;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // return time formated as mm:ss
    let minutes =  this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let tensOfMilliSeconds = this.computeTwoDigitNumber(this.getTensOfMilliSeconds());
    return `${minutes}:${seconds}:${tensOfMilliSeconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
