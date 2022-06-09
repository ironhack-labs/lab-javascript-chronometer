class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(callback) {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  getMilliseconds() {
    let seconds = this.getSeconds();
    return seconds * 1000;
  }

  computeTwoDigitNumber(num) {    
    if (num < 10) {return "0" + num}
      else if (num < 100) {return String(num)}
          else {return (String(num)).slice(0,2)}
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let num1 = this.getMinutes();
    let num2 = this.getSeconds();
    let num3 = this.getMilliseconds();
    return `${this.computeTwoDigitNumber(num1)}:${this.computeTwoDigitNumber(num2)}:${this.computeTwoDigitNumber(num3)}`
}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
