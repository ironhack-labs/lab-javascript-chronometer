class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null ;
    this.miliSecIntervalId= null;
    this.currentMiliSec = 0;
  }

  start(callback) {
    this.intervalId = setInterval(()=> {
      this.currentTime ++
      if (callback) {
        callback();
      }
    } ,1000)

    this.miliSecIntervalId = setInterval(()=> {
      this.currentMiliSec ++;
      if(this.currentMiliSec === 99){
        this.currentMiliSec = 0;
      }
      if (callback) {
        callback();
      }
    } ,10)

  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
     return (this.currentTime)%60;
  }

  getMiliSeconds() {
    return Math.floor(this.currentMiliSec);
  }

  computeTwoDigitNumber(value) {
    if(value < 10) return `0${value}`;
    else return `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.miliSecIntervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getMiliSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
