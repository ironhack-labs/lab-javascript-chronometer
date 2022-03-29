class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback != undefined) {
        this.currentTime++;
        callback();
      } else this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    //return a string
    if (value < 10) {
      return '0' + value.toString();
    } else if (value > 10) {
      return value.toString();
    } else if (value === 0) {
      return '00';
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let mins = this.computeTwoDigitNumber(this.getMinutes());
    let secs = this.computeTwoDigitNumber(this.getSeconds());

    return `${mins}:${secs}`;

    // return a string = mm:ss
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
