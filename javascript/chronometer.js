class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime=0;
    this.intervalId=null;
  }

  start(callback) {
    // ... your code goes here
    if(callback){
      this.intervalId = setInterval(() => {
        this.currentTime++;
        callback();
      },10);
    } else {
      this.intervalId = setInterval(() => this.currentTime++ , 10);
    }
  }

  getMinutes() {
    // ... your code goes here
    return Math.trunc(this.currentTime/6e3);
  }

  getSeconds() {
    // ... your code goes here
    return Math.trunc((this.currentTime%6e3)/1e2);
  }

  getMilliseconds(){
    // ... your code goes here
    return this.currentTime%1e2;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value<10){
      return `0${value}`;
    }
    else {
      return `${value}`;
    }
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
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
