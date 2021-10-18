class Chronometer {
  currentTime = 0;
  intervalId = null;

  constructor() {
    // ... your code goes here
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      this.currentTime ++; 
    },1000);
  }

  getMinutes() {
    // ... your code goes here
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10){
      return "0" + value;
    }else {
      return value.toString();
    }
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
    let minutes= this.computeTwoDigitNumber(this.getMinutes());
    let seconds= this.computeTwoDigitNumber(this.getSeconds());

    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
