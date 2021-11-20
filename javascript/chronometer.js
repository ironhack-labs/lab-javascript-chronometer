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

  //We're now able to get the number of minutes that have passed. But what if we wanted to get the number of seconds that have passed after the start of the current minute?
  //The getSeconds method should return the number of seconds that have passed after the start of the current minute.


  getSeconds() {
    
    if (this.currentTime === 0) {
      return 0;
    }
    if (parseInt(this.currentTime / 60) > 0) {
      this.currentTime = this.currentTime - (parseInt(this.currentTime / 60) * 60);
    } 
    
    return this.currentTime;
  }

  //The computeTwoDigitNumber method should take a number, and return a string where the number received as an argument has been padded with 0s to ensure the value is at least 2 characters long.

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
  //The split method should expect no arguments, and return a string where the time since the start is formatted as "mm:ss". Internally, the split method can make usage of previously declared methods such as getMinutes, getSeconds, and computeTwoDigitNumber.
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
