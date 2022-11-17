class Chronometer {
  constructor(currentTime, intervalId) {

    this.currentTime = 0;
    this.intervalId = null;

    this.milliTime = 0;
    this.milliIntervalId = null;
  }

  start(callback, milliCallback) {
    
    this.intervalId = setInterval(() => {
      this.currentTime++; 
      callback(); 
    }, 1000); 

    this.milliIntervalId = setInterval(() => {
      this.milliTime++;
      milliCallback();
    }, 10);

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
   clearInterval(this.intervalId);
   clearInterval(this.milliIntervalId);
  }

  reset() {
   this.currentTime = 0;
   this.milliTime = 0;
  }

  split() {
    let minutes, seconds, milliseconds;
    minutes = this.computeTwoDigitNumber(this.getMinutes());
    seconds = this.computeTwoDigitNumber(this.getSeconds());

    milliseconds = this.computeTwoDigitNumber(this.milliTime());

    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}