class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
      if (typeof callback === 'function') {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }

  getSeconds() {
    //this.currenttime holds the seconds then we find the remainder of that by modulos 60 cause 60 is a minute so whatever is left over it returns it.
    return this.currentTime % 60;

    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    // we can use methods inside of methods
    return (
      this.computeTwoDigitNumber(this.getMinutes()) +
      ':' +
      this.computeTwoDigitNumber(this.getSeconds())
    );
  }
  // ... your code goes here
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
