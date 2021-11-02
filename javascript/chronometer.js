class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;// ... your code goes here
  }

  start(callback) {
      
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        },1000 );
    }


  getMinutes() {
    
    // ... your code goes here
    return Number(Math.floor((this.currentTime/60)));

  }

  getSeconds() {
    return Number(Math.floor((this.currentTime%60)));// ... your code goes here
  }

  computeTwoDigitNumber(value) {
    return value<10 ? "0" + value.toString() : value.toString()// ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId)// ... your code goes here
  }

  reset() {
    this.currentTime=0;// ... your code goes here
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
