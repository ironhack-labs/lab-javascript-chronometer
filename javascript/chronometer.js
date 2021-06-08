class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if(callback) {callback};
      this.currentTime += 1;
    }, 1000) 
  }

  
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }


  getSeconds() {
    let seconds = 0;
    if (this.currentTime < 60) {
      seconds += this.currentTime;
    } else {
    seconds += this.currentTime % 60;
    }
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let twoDigits;
    let valueString = value.toString();
    if (valueString.length === 1) {
      twoDigits = "0" + valueString;
    } else {
      twoDigits = valueString;
    }
    return twoDigits
    // return value as string "0value" if value is 1num or "value"
  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    let splitTime;
    let min = this.getMinutes() // 0
    let sec = this.getSeconds() // 5

    splitTime = this.computeTwoDigitNumber(min) + ":" + this.computeTwoDigitNumber(sec);

    return splitTime;
    // return "mm:ss"
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
