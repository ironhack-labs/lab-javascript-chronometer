class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 1;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval( () => {
      if (callback) {
        callback(); 
      } ++this.currentTime;
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let Computed = String(value).slice(0,2);
    if (Computed.length < 2) {
      return 0+Computed;
    }; return Computed;
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
