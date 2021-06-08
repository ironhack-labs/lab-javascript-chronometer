class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
   
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime =+1;
      console.log(this.currentTime);
    },1000);

    
    
  }

  getMinutes() {
    return parseInt(Math.floor(this.currentTime / 60));
    
  }

  getSeconds() {
    return parseInt(this.currentTime % 60);
    
  }

  computeTwoDigitNumber(value) {
    
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);
    
  }

  reset() {
    this.currentTime = 0;
    
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
