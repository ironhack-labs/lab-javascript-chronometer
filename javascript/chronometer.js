class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null;
    this.milliSec = 0;
    this.milliIntervalId = null;
  }


  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      if (callback){callback()};
    },1000);


    this.milliIntervalId = setInterval( () => {
      if (this.milliSec === 99) {
        this.milliSec = 0;
      }
      this.milliSec += 1;
      if (printMilliseconds) printMilliseconds();
    }, 10);

    // this.milliIntervalId = setInterval(()=>{
    //   this.milliSec++;
    //   if (callback){callback()};
    // },10)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime%60);
  }

  getMilliSeconds(){
    //new function for the milliseconds
    return Math.floor(this.milliSec);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value<10){
      return `0${value}`;
    }
    return `${value}`;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    clearInterval(this.milliIntervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    this.milliSec = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getMilliSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
