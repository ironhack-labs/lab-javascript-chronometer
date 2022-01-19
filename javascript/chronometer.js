class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
    }, 10)
  }

  getMinutes() {
    return Math.floor((this.currentTime / 100) / 60) % 60;
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  //Milli?!
  getMilliSeconds() {
    return Math.floor(this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    return (value < 10) ? "0" + String(value) : String(value); 
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    stop();
    this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds()) + ":" + this.computeTwoDigitNumber(this.getMilliSeconds());
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
