class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    }
  start(callback) {
     this.intervalId = setInterval(() => { this.currentTime += 1; if (callback) callback();}, 1000);
    }
  
  getMinutes(){
    let min = (Math.floor((this.currentTime / 60)));
    return min;
  }

  getSeconds() {
    let sec = (Math.floor((this.currentTime % 60)));
    return sec
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`
    } else {
    return value.toString();
    }
  }

  stop() {
      return clearInterval(this.intervalId); 
    }

  reset() {
    return this.currentTime = 0
  }

  split() {
return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
   }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
