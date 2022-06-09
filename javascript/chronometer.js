class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {

    if(callback) {
      callback();
    } else {
        this.intervalId = setInterval(() => {
        return this.currentTime++;
        }, 1000);
  }
}

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(num) {    
    if (num <= 10) {return "0" + num}
      else {return String(num)}  
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
    return `${this.computeTwoDigitNumber(num1)}:${this.computeTwoDigitNumber(num2)}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
