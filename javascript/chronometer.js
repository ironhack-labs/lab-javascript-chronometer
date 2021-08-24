class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.miliseconds = 0;
  }

  start(callback) {
    
    this.intervalId = setInterval(() => {
      this.miliseconds++;
      if (this.miliseconds === 100) {
        this.currentTime++;
        this.miliseconds = 0;
      }
      if (callback) {
        callback();
      }
    }, 10)
  }

  
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMiliseconds() {
    return this.miliseconds;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`
    }else {
      return `${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.miliseconds = 0;
  }

  split() {
    // this.computeTwoDigitNumber(console.log(`${this.getMinutes()}:${this.getSeconds()}`));
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const miliseconds = this.computeTwoDigitNumber(this.getMiliseconds())
    return `${minutes}:${seconds}:${miliseconds}`;
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