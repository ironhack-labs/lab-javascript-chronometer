class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  };

  start(callback) {   

       this.intervalId = setInterval (() => {
         if(callback) {
           callback()
          }
          this.currentTime += 1;
       }, 1000)
     }
// math function here rounds down, so it'll stay at 1 minute, until it reaches 2
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  // this counts the seconds between each minute, it should begin at zero and every time it reaches 60
  getSeconds() {
    // the modular function here counts in 60s, everytime it gets to 60, it starts at 0 again
    return this.currentTime % 60;
  }
  
  computeTwoDigitNumber(value) {
    return (value).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  }

  stop() {
     return clearInterval(this.intervalId)
    };
  

  reset() {
    return this.currentTime = 0
  }

  //return a string that gives both the minutes and seconds in 2-digit formats
  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds())
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
