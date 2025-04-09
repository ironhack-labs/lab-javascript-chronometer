class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    //callback optional
    this.intervalId = setInterval(() => {
      // (() { to keep referencing to object "chronometer" / setInterval to start chrono
      this.currentTime++; // Increment the current time by 1 every second
      if (callback)
        //call callback function if given
        callback();
    }, 1000); // 1000 milliseconds = 1 seconde
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    //return value < 10 ? '0' + value : '' + value; // adds 0 in front of single digit numbers
    if (value < 10) {
      return '0' + value;
    } else {
      return '' + value;
    }
  }

  stop() {
    clearInterval(this.intervalId); // Stops the chrono
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`; // Returns the time in mm:ss format
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
