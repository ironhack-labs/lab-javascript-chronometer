/*jshint esversion:8 */
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {

    let min = parseInt(this.currentTime / 60);
    return min;
  }


  getSeconds() {
    
    if (this.currentTime === 0) {
      return 0;
    }
    if (parseInt(this.currentTime / 60) > 0) {
      this.currentTime = this.currentTime - (parseInt(this.currentTime / 60) * 60);
    } 
    
    return this.currentTime;
  }

  computeTwoDigitNumber(value) {
    let str = "0";
    
    if (value.toString().length < 2) {
      return str + value;
    } else {
      return value.toString();
    }

  }
  stop() {
    clearInterval(this.intervalId);
  }
  
  reset() {
    this.currentTime = 0;
  }

  split() {

    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
