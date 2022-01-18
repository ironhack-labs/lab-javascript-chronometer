class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback = undefined) {
    this.intervalId = setInterval(() =>
      //callback
      {
        this.currentTime++;
      }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    const reminder = this.currentTime % 60;
    return (this.currentTime - reminder) / 60;
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let stringNumber;
    value < 10
      ? (stringNumber = '0' + value)
      : (stringNumber = value.toString());

    return stringNumber;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
