/* jshint esversion: 6 */

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    let i = 1;
    const intervalId = setInterval( callback => {
      i++;
      this.currentTime += 0.01;
      }, 10);
    this.intervalId = intervalId;
    if(callback) {
      callback();
    }
  }

  getMinutes() {
    const minutesElapsed = Math.floor(this.currentTime/60);
    return minutesElapsed;
  }

  getSeconds() {
    const secondsElapsed = Math.floor(this.currentTime % 60);
    return secondsElapsed;
  }

  getMilliseconds() {
    const millisecondsElapsed = (this.currentTime * 1000) % 1000;
    return millisecondsElapsed.toFixed(0);
  }

  computeTwoDigitNumber(value) {
    const test = value.toString();
    if(test.length === 1) {
      return `0${test}`;
    } else {
      return test;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const mins = this.computeTwoDigitNumber(this.getMinutes());
    const secs = this.computeTwoDigitNumber(this.getSeconds());
    const mill = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${mins}:${secs}:${mill}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
