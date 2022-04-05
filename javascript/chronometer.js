class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    }

  start(printTime) {
    this.intervalId = setInterval(() =>{
      this.currentTime ++;
      if (printTime) printTime();
    }, 1000);
  }

  getMinutes() {
    if (this.currentTime === 0) return 0;
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    if (this.currentTime === 0) return 0;
    return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    minDecElement.innerHTML = "0";
    minUniElement.innerHTML = "0";
    secDecElement.innerHTML = "0";
    secUniElement.innerHTML = "0";
  }

  split() {
    // minutes Passed = this.computeTwoDigitNumber(this.getMinutes());
    // seconds Passed = this.computeTwoDigitNumber(this.getSeconds());

    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
