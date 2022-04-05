class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMilliseconds = 0;
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
    clearInterval(this.millisecondsId);
  }

  reset() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
    minDecElement.innerHTML = "0";
    minUniElement.innerHTML = "0";
    secDecElement.innerHTML = "0";
    secUniElement.innerHTML = "0";
    milDecElement.innerHTML = "0";
    milUniElement.innerHTML = "0";
  }

  split() {
    // minutes Passed = this.computeTwoDigitNumber(this.getMinutes());
    // seconds Passed = this.computeTwoDigitNumber(this.getSeconds());

    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.currentMilliseconds)}`;
  }

  milliseconds(printMilliseconds) {
    this.millisecondsId = setInterval(() =>{
      this.currentMilliseconds ++;
      if(printMilliseconds) printMilliseconds();
      if (this.currentMilliseconds === 99) this.currentMilliseconds = 0;
    }, 1);
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
