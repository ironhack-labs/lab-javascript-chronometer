class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
 
  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  
  
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  
  computeTwoDigitNumber(value) {
    if (value <= 9) {
      return `0${value}`;
    }
    return value.toString();
  }
  
  stop() {
    clearInterval(this.intervalId);
  }
  
  reset() {
    this.currentTime = 0
  }
 
  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
