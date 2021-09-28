class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++ ;
      if (callback) {
        callback();
      }
    },1000);
  }

  getMinutes() {
    let currentTimeMinutes = Math.floor (this.currentTime / 60);
    return currentTimeMinutes; 
  }

  getSeconds() {
    let currentTimeSeconds = Math.floor (this.currentTime % 60);
    return currentTimeSeconds;
    
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      value = `0${value}`;
    }
    return `${value}`; 
  }
  

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
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
