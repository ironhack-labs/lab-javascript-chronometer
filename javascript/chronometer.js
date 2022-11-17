class Chronometer {
  constructor(currentTime, intervalId) {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // currentTime ++ every second. function 1 sec interval
    if (callback) {
      this.intervalId = setInterval(() => {
        this.currentTime++; 
        callback(); 
      }, 1000) 
    } else {
      this.intervalId = setInterval(() => this.currentTime++, 1000);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    // return Math.floor(this.currentTime)-(getMinutes * 60);
    return Math.floor(this.currentTime%60);
  }

  computeTwoDigitNumber(value) {
    let valueString = value.toString();
    return valueString.length === 1 ? "0".concat(valueString) : valueString; 
  }

  stop() {
   return clearInterval(this.intervalId);
  }

  reset() {
   return this.currentTime = 0;
  }

  split() {
    let minutes, seconds;
    minutes = this.computeTwoDigitNumber(this.getMinutes());
    seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}