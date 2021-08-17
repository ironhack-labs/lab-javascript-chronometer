class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentMiliseconds = 0;
    this.intervalId = null;
    this.intervalId2 = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      //!!If there is a callback, execute it, it it isn't the code will ignore the execution
      if (callback) callback();
      this.currentTime += 1;
    }, 1000);
    this.intervalId2 = setInterval(() => {
      //!!If there is a callback, execute it, it it isn't the code will ignore the execution
      if (callback) callback();
      this.currentMiliseconds += 1;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMiliseconds() {
    if (this.currentMiliseconds < 99) return this.currentMiliseconds;
    else this.currentMiliseconds = 0;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else return `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalId2);
  }

  reset() {
    this.currentTime = 0;
    this.currentMiliseconds = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return minutes + ':' + seconds;
  }

  splitWithMiliseconds() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let miliseconds = this.computeTwoDigitNumber(this.getMiliseconds());
    return minutes + ':' + seconds + ':' + miliseconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
