class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback !== undefined) {
        callback();
      }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() { 
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(num) {
    return ("0" + num).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    minDec.innerHTML = 0;
    minUni.innerHTML = 0;
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
  }

  split() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());

    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}