class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1
      }, 1000)
    }
  }

  getMinutes() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 60)
    }
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0;
    } else {
      return this.currentTime % 60
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value >= 10) {
      return value.toString();
    } else {
      return ('0' + value).toString()
    }
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here
   if (this.currentTime >= 60) {
    let minutesNum = this.getMinutes();
    let secondsNum = this.getSeconds();
    let minutes = this.computeTwoDigitNumber(minutesNum);
    let seconds = this.computeTwoDigitNumber(secondsNum); 
    return `${minutes}:${seconds}`
   } else {
    let secondsNum = this.getSeconds();
    let seconds = this.computeTwoDigitNumber(secondsNum);
    return `00:${seconds}`
   }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}