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
   return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  getMilliseconds() {
    return this.currentTime 
  }


  computeTwoDigitNumber(value) {
    if(value === 0 ){
      return value + "0"
    } else if(value < 10){
      return "0" + value
    } else if(value > 10){
      return value + ""
    }
   
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
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


//Asi se escriben los arrow functions (() => {}, 0)
