class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  // Increment currentTime every second
  start(callback) {
    this.intervalId = setInterval(() => {
      if(callback){
        callback();
      } else {
        this.currentTime++;
      }   
    }, 1000);
  }
  // Calculate minutes passed
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  // Calculate seconds that have passed after the start of the current minute.
  getSeconds() {
    return this.currentTime % 60;
  }
  // Transform value received into a string with two digits
  computeTwoDigitNumber(value) {
    return  (value > 9 ? value.toString() : "0" + value);
  }
  // Stop the interval created in start()
  stop() {
    clearInterval(this.intervalId);
  }
  // Reset currentTime to 0
  reset() {
    this.currentTime = 0;
  }
  // Return a string with currentTime formatted as "mm:ss"
  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes(this.currentTime));
    const seconds = this.computeTwoDigitNumber(this.getSeconds(this.currentTime));
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
