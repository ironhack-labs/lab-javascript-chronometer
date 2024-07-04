class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0');
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;

    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    document.getElementById('minDec').innerHTML = minutes[0];
    document.getElementById('minUni').innerHTML = minutes[1];

    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    document.getElementById('secDec').innerHTML = seconds[0];
    document.getElementById('secUni').innerHTML = seconds[1];
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
