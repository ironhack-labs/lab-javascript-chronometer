class Chronometer {
  currentTime = 0;
  intervalId = null;
  constructor() {

  }

  start(callback) {
    // ... your code goes here
    if(callback){
      callback
    } else {
      this.intervalId = setInterval(()=>{
        this.currentTime ++;
      }, 1000)
  }
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let strVal = `${value}`
    strVal.length == 1 ? strVal ="0"+strVal : strVal;
    return strVal;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
