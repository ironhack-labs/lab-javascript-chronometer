class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.milliseconds = 0;
    this.intervalIdMili = null;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.milliseconds++;
      if (this.milliseconds >= 99) {
        this.milliseconds = 0;
        this.currentTime++;
      }
      callback();
    }, 10);
  }

  getMinutes() {
    let minutes = this.currentTime / 60;
    let roundDown = Math.floor(minutes);
    let result = Number(roundDown.toFixed());
    return result;
  }

  getSeconds() {
    let secondsPerMin = 60;
    let result = this.currentTime % secondsPerMin;
    return result;
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length === 1) {
      return '0' + value.toString();
    } else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let minsString = this.computeTwoDigitNumber(minutes);
    let secsString = this.computeTwoDigitNumber(seconds);
    let milliString = this.computeTwoDigitNumber(this.milliseconds);
    return `${minsString}:${secsString}:${milliString}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
