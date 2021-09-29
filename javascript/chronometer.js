class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    const intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
      if (callback) {
        callback();
      }
    }, 1000);
    
  }

  getMinutes() {
   let minutes =  Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds =  Math.floor(this.currentTime % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
  
    if (value < 10) {
      return '0' + value;
    } else {
    return value;
    };
    // return value.padStart(2, "0");

  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
   this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return minutes + `:` + seconds;
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
