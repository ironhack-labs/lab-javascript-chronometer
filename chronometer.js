class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (callback) {
      callback();
    } else {
    intervalId = setInterval(() => {
      return currentTime++;
    }, 1000);
    intervalId = setInterval();
    }
  }
  

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    }
    let minutes = Math.floor(currentTime / 60);
    return minutes;
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    let seconds = currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    zeroDigits = `0${value}`;
    twoDigits = zeroDigits.slice(-2);
    return twoDigits;
  }

  stop() {
    clearInterval(intervalId); //    should stop a previously started chronometer ?
  }

  reset() {
    currentTime = 0;
    document.getElementsByClassName('numbers').innerHTML = '00:00';
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let splitTime = `${minutes}:${seconds}`;
    return splitTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
