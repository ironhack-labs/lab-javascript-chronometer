class Chronometer {
  constructor() {
    this.currentTime = 4000;
    this.intervalId = null;
  }

  start(callback) {
    
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
      console.log('getminutes', this.getMinutes());
      console.log('getSeconds', this.getSeconds());
    }, 1000)
  }

  
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`
    }else {
      return `${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // this.computeTwoDigitNumber(console.log(`${this.getMinutes()}:${this.getSeconds()}`));
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

const stopwatch = new Chronometer;

//  stopwatch.start();
// stopwatch.split();