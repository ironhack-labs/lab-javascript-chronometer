const { start } = require("repl");
const { number } = require("yargs");

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(printTime) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTime) printTime();
    }, 1000);
  }
  getMinutes() {
    let minutes = (this.currentTime / 60);
    minutes = Math.floor(minutes);
    return minutes;
  }
  getSeconds() {
    let currentTimeSec = this.currentTime % 60;
    return currentTimeSec;
  }
  computeTwoDigitNumber(value) {
    let number = value.toString();
    if (number.length === 2) {
      return number;
    } else {
      return `0${value}`;
    }
  }
  stop() {
    clearInterval(this.intervalId)
  }
  reset() {
    this.currentTime = 0;
  }
  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
