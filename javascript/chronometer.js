class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
      this.intervalId = setInterval(()=>{ 
        if (!callback) {
          callback;
        }
        console.log("this works");
        this.currentTime = this.currentTime+1 }, 1000);
    }




  getMinutes() {
    // ... your code goes here
    if (this.currentTime<60) {
      return 0;
    }
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime===0) {
      return 0;
    }
    return this.currentTime%60; 
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let stringValue = value.toString();
    if (stringValue.length===1) {
      return "0"+stringValue;
    }

    return stringValue;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime=0;
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
