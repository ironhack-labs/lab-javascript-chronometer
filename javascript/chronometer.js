class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  //TODO if statement iteration 1
  start(callback) {
      this.intervalId = setInterval(() => {
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
    let newArr = [];
    const stringValue = value.toString();
    if (stringValue.length === 1 || 0) {
      newArr.push('0', stringValue);
      const result = newArr.join('');
      return result;
    } else {
      return value.toString();
    }
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
