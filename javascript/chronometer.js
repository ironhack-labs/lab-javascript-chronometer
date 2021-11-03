class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
  }

  start(callback) { 
    this.intervalId = setInterval(() => {
        this.currentTime ++;
        if(callback) callback();
        }, 1000);
    }
  
    getMinutes() {
      return Number(Math.floor((this.currentTime/60)));
      }

  getSeconds() {
    return Number(this.currentTime%60);
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return value.toString();
    }
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }


  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
    // esto regresa un string con formato '00:00' 
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
