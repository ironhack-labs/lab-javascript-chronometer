class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    this.timerId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(callback) callback();
    }, 1000);
    
  }

  getMinutes() {
    // ... your code goes here
    if (this.currentTime && this.intervalId) {
      return Math.floor(this.currentTime / 60);
    }
    return 0;
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime && this.intervalId) {
      return this.currentTime % 60;
    }
    return 0;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let str = value.toString();
    return str.length < 2 ? `0${str}` : str;
  }

  stop() {
    // ... your code goes here
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minuts = this.computeTwoDigitNumber(this.getMinutes());
    let second = this.computeTwoDigitNumber(this.getSeconds());
    return `${minuts}:${second}`;
  }
  getMilliseconds() {
    //converting to String spliting by '.' then take only first 2 char.
    console.log(this.getSeconds().toString()).split('.')
    let ms = (this.getSeconds().toString()).split('.')[1].slice(0, 2);
    return ms;
  }
  splitWithMiliSecond() {
    const min = computeTwoDigitNumber(
      this.computeTwoDigitNumber(this.getMinutes())
    );
    const second = computeTwoDigitNumber(
      this.computeTwoDigitNumber(this.getSeconds())
    );
    const mili = computeTwoDigitNumber(this.getMilliseconds());
    return `${min}:${sec}:${mili}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
