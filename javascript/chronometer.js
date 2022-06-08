class Chronometer {
  constructor() {
    this.currentTime =  0; 
    this.intervalId = null; 
    this.Milliseconds = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime)
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    return String('00' + value).slice(-2); // returns string where number padded with at least 2 0s
  }

  stop() {
    clearInterval(this.intervalId);
  } 

  reset() {
    this.currentTime = 0; 
  }

  // split for min:sec
  // split() {
  //   return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  // } 

  // split for min:sec:millisecs
  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:
    ${this.computeTwoDigitNumber(this.getSeconds())}:
    ${this.computeTwoDigitNumber(this.getMilliseconds())}`;
  } 

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
