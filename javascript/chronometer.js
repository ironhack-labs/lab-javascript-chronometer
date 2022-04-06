class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // this.intervalId = null;
  }

  start(printTime) {
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if (printTime) printTime();
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(num) {
    return ("0" + num).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId);
  }

  reset() {
    this.currentTime = 0;
    minDecElement.innerHTML = 0;
    minUniElement.innerHTML = 0;
    secDecElement.innerHTML = 0;
    secUniElement.innerHTML = 0;
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
