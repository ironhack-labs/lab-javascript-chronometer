class Chronometer {
  constructor() {
    // properties of the Chronometer class inizialized
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // increment the seconds by one
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  getMilliseconds() {
    return this.currentTime % (60 * 1000);
    
  }

  computeTwoDigitNumber(value) {    
    if(String(value).length < 2){
      return "0".concat(value);
    } else {
      return "".concat(value);
    }
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let minTwoDigits = this.computeTwoDigitNumber(this.getMinutes());
    let secTwoDigits = this.computeTwoDigitNumber(this.getSeconds());
    return `${minTwoDigits}:${secTwoDigits}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
