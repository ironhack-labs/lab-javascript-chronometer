class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
   this.intervalId = setInterval(() => {
    if (callback) {
      callback();
    }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  
  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  getMilliseconds(){
    return 0
  }
  
  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0');
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    // const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    
    return  `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

