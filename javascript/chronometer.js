class Chronometer {
  constructor() {
    // ... your code goes here

    this.currentTime= 0; 
    this.intervalId= null;

  }
  
  start(callback) {
    this.intervalId= setInterval(()=> {
      this.currentTime= this.currentTime+1 ;
    }, 1000);
    callback(this.intervalId)
  
  }

  getMinutes() {
    // ... your code goes here
    const minutes= Math.floor (this.currentTime/60);
    return minutes
  }
  getSeconds() {
    // ... your code goes here
    const seconds= Math.floor(this.currentTime%60);
    return seconds
  }

  computeTwoDigitNumber(value) {
    let twoDigits = value.toString();
      if (value.length < 2) {
        numStr = '0' + numStr;
      }
      return twoDigits;
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId); 
    this.intervalId= null;
  }

  reset() {
    // ... your code goes here
    this.currentTime=0
  }

  split() {
    let split= (this.getMinutes()) + ":"+ (this.getSeconds())
    // ... your code goes here
    return split
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
