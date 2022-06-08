class Chronometer {
  constructor() {
    // ... your code goes here
    
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // will start keeping track of time, by running a function in a 1 second interval, 
    //which will increment the amount of seconds stored in the property currentTime by 1. 
    this.intervalId = setInterval(() => {
      let timer = this.currentTime;
      let split = this.split();

      timer += 1;
      this.currentTime = timer;
      split;
    },1000);
  }

  getMinutes() {
    //return the number of minutes that have passed as an integer, as a whole number. 
    
    return Math.floor(this.currentTime / 60);
  }

  getSeconds(minutes) {
    //return the number of seconds that have passed after the start of the current minute.
    console.log(Math.floor(this.currentTime - (minutes * 60)));
    return Math.floor(this.currentTime - (minutes * 60));
  }

  computeTwoDigitNumber(value) {
    // return a string where the number received as an argument has been padded with 0s to ensure the value is at least 2 characters long.
    return ('0' + value ).slice(-2);
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
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds(minutes));
    printTime(minutes,seconds);
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
