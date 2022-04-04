class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback !== undefined) {
        callback();
      }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() { 
    return Math.round(this.currentTime / 60);
  }

  getSeconds() {
    if (this.currentTime <=59) {
      return this.currentTime;
    } else if (this.currentTime % 60 === 0) {
      return this.currentTime - (this.currentTime % 60 === 0);
    }
  }

  computeTwoDigitNumber(value) {
    if (value < 10 && value > 0) {
      return '0'+ value;
    } else if (value === 0) {
      return '00';
    } else if (value >= 10 && value < 60) {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    return value;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
