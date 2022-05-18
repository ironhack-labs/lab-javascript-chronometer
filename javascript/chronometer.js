class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) {
        callback();
      }
    }, 1000);
    return;
  }

  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60);
    // console.log('minutes', minutes);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    console.log('this.currentTime getSec', this.currentTime);
    const seconds = Math.floor(this.currentTime % 60);
    console.log('seconds', seconds);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const twoDigitNumber = String(value).padStart(2, '0');
    console.log('computeTwoDigitNumber', twoDigitNumber);
    return twoDigitNumber;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    const number = document.querySelectorAll('#sphere .number');
    number.forEach((element) => {
      element.textContent = 0;
    });
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
