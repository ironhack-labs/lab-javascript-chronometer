class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        console.log(this.split());
        if (callback) {
        callback();
        }
      }, 1000);
      return this.intervalId;
    }


  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value;
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
    const currentMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const currentSeconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${currentMinutes}:${currentSeconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
