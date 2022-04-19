class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback) {
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

  computeTwoDigitNumber(value) {
    
   if (value < 10) {
      return '0' + value.toString();
    } else {
      return value.toString();
    }
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    return (this.currentTime = 0);
  }

  split() {
    let minutesString = this.computeTwoDigitNumber(this.getMinutes());
    let secondsString = this.computeTwoDigitNumber(this.getSeconds());

    return `${minutesString}:${secondsString}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
