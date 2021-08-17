class Chronometer {
  constructor() {
    this.currentTime = 320;
    this.intervalId = null;
  }

  start(callback) {
    
    this.intervalId = setInterval(() => {
      this.currentTime++;
      console.log('getminutes', this.getMinutes());
      console.log('getSeconds', this.getSeconds());
    }, 1000)
  }

  
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    let minutesToSeconds = this.getMinutes() * 60;
    let secondsOnly = this.currentTime - minutesToSeconds;
    return secondsOnly;
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
    this.computeTwoDigitNumber(console.log(`${this.getMinutes()}:${this.getSeconds()}`));
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

const chronometer = new Chronometer;

// chronometer.start();
chronometer.split()