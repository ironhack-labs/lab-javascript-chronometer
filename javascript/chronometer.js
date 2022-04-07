class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentTimeMil = 0;
    this.millisecondsIntervalId = 0;
  }

  start(callback, printMilliseconds) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);
    this.millisecondsIntervalId = setInterval(() => {
      if (this.currentTimeMil === 99) {
        this.currentTimeMil = 0;
      }
      this.currentTimeMil += 1;
      if (printMilliseconds) {
        printMilliseconds();
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId);
  }

  reset() {
    this.currentTime = 0;
    this.currentTimeMil = 0;
    minDecElement.innerHTML = 0;
    minUniElement.innerHTML = 0;
    secDecElement.innerHTML = 0;
    secUniElement.innerHTML = 0;
    milDecElement.innerHTML = 0;
    milUniElement.innerHTML = 0;
  }

  split() {
    // and return a string where the time since the start is formatted as "_mm:ss_".

    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());

    let millisec = this.computeTwoDigitNumber(this.currentTimeMil);

    return `${minutes}:${seconds}:${millisec}`;

    /*
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;*/
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}