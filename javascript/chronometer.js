class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    }

  start(callback) {
    if (callback) callback();

    this.intervalId = setInterval(() =>{
      this.currentTime ++;
    }, 1000);
  }

  getMinutes() {
    if (this.currentTime === 0) return 0;

    let minutes = Math.floor(this.currentTime / 60);

    return minutes;
  }

  getSeconds() {
    if (this.currentTime === 0) return 0;

    let seconds = this.currentTime%60;

    return seconds;
  }

  computeTwoDigitNumber(value) {
    let computedValue;

    if (value < 10) {
      computedValue = `0${value}`;
    } else {
      computedValue = `${value}`;
    }

    return computedValue;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutesPassed = this.computeTwoDigitNumber(this.getMinutes());
    let secondsPassed = this.computeTwoDigitNumber(this.getSeconds());
  
    let splitTime = `${minutesPassed}:${secondsPassed}`;

    return splitTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
