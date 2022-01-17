class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(this.currentTime > 3) {
        clearInterval(this.intervalId)
      }
    }, 1000);
  }

  getMinutes() {
    let minute = Math.floor(this.currentTime / 60);
    return minute;
  }

  getSeconds() {
    if(this.currentTime === 0) {
      return 0
    } else if(this.currentTime <= 9) {
      
    }
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    let numToString = value.toString();
    if( value <= 9) {
      return `0${numToString}`
    } else {
      return numToString
    }
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let a = this.computeTwoDigitNumber(this.getMinutes())
    let b = this.computeTwoDigitNumber(this.getSeconds())
    return `${a}:${b}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
