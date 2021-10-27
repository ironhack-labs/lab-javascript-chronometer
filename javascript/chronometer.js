class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  // Increment currentTime every 10 miliseconds
  start(callback) {
    this.intervalId = setInterval(() => {
      if(callback){
        callback();
      } else {
        this.currentTime++;
      }   
    }, 10);
  }
  // Calculate minutes passed
  getMinutes() {
    return Math.floor(this.currentTime/6000);
  }
  // Calculate seconds that have passed after the start of the current minute.
  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60);
  }
  getMiliseconds(){
    return this.currentTime % 100;
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
  // Return a string with currentTime formatted as "mm:ss:msms"
  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes(this.currentTime));
    const seconds = this.computeTwoDigitNumber(this.getSeconds(this.currentTime));
    const miliseconds = this.computeTwoDigitNumber(this.getMiliseconds(this.currentTime));
    return `${minutes}:${seconds}:${miliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
