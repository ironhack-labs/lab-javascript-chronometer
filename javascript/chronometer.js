class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    const incrementOne = callback => {
      this.currentTime++;
    }
    this.intervalId = setInterval(incrementOne, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.trunc(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let strgOne = value.toString();
    let strgTwo = '0';
    if (strgOne.length < 2) {
      return strgTwo += strgOne;
    }else {
      return strgOne;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval( this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let value1 = this.computeTwoDigitNumber(this.getMinutes());
    let value2 = this.computeTwoDigitNumber(this.getSeconds());
    return `${value1}:${value2}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
