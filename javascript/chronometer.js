class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId= null;
  }

  start(callback) {
    // ... your code goes here
   
    this.intervalId = setInterval(() => {
      this.currentTime+=1;
    }, 1000);
  }

  getMinutes(){
        // ... your code goes here
    if (this.currentTime==0) {
        return 0;
    }
    else {
      return this.currentTime=Math.floor(this.currentTime/60);
    }
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime==0) {
      return 0;
    }
    else {
      return this.currentTime = this.currentTime%60;
    }

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value<10) {   
        return 0 + `${value}`;
    }
    else {
      return `${value}`;
    }
    
  }

  stop() {
    // ... your code goes here
      clearInterval(this.intervalId);
      this.intervalId = null;
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return this.currentTime=computeTwoDigitNumber(this.currentTime.getMinutes()) + ':' + computeTwoDigitNumber(this.currentTime.getSeconds());
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
