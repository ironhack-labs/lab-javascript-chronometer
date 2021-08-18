class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime+=1;
    }, 1000);
    return this.intervalId;
  };

  getMinutes() {
    let howManyMins = Math.floor(this.currentTime / 60);
    if (howManyMins <= 0) {
      return 0;
    } else {
    return parseInt(howManyMins.toFixed());
  }};

  getSeconds() {
    let howManySecs = this.currentTime % 60;
    return howManySecs;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return value + '';
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return  this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds());
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
