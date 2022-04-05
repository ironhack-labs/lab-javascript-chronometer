class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.twoDigitNumber = '';
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return this.currentTime / 65;
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length === 1) {
      return `0${value.toString()}`;
    } else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
  this.currentTime = 0;
  }

  split() {
return `${this.getMinutes}:${this.getSeconds}`;
}
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


