class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start() {
    // checks if the interval has not yet started
    if (!this.intervalId) {
      this.intervalId = setInterval(() => this.currentTime++, 1000);
    }
  }

  getMinutes() {
    // ... your code goes here
    let minutes = this.currentTime / 60;
    return this.computeTwoDigitNumber(Math.floor(minutes));
  }

  getSeconds() {
    // ... your code goes here
    return this.computeTwoDigitNumber(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let numberAsString = '';

    if (value < 10) {
      numberAsString = `0${value}`;
    } else {
      numberAsString = `${value}`;
    }

    return numberAsString;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  split() {
    // ... your code goes here

    return `${this.getMinutes()}:${this.getSeconds()}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
