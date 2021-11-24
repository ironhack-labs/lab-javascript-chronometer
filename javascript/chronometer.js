/*jshint esversion:8 */
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMilliseconds = this.currentTime / 1000;
    this.millisecondsStopper = null;
  }
  

  start() {

    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
    this.millisecondsStopper = setInterval(() => {
      this.currentMilliseconds += 1;
    }, 10);

  }

  getMinutes() {

    return Math.floor(this.currentTime / 60);
     
  }


  getSeconds() {
    
    if (this.currentTime === 0) {
      return 0;
    }
    if (Math.floor(this.currentTime / 60) > 0) {
      return this.currentTime - (Math.floor(this.currentTime / 60) * 60);
    } 
    
    return this.currentTime;
  }

  getMilliseconds() {

    if (this.currentMilliseconds === 0) {
      return 0;
    }
    if (this.currentMilliseconds > 99) {
      this.currentMilliseconds = 0;
    }
    return this.currentMilliseconds;
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
    clearInterval(this.millisecondsStopper);

  }
  
  reset() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
  }

  split() {

    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());

    return `${minutes}:${seconds}:${milliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
