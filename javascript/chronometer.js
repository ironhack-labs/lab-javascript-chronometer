class Chronometer {
  constructor() {
    this.currentTime = 598;
    this.intervalId = null;
  }

  start(callback) {

    
   this.intervalId = setInterval(() => {
     if(callback){callback()}
     this.currentTime++
     console.log(this.currentTime);
   }, 1000)
  }

  getMinutes() {
    let minutes = this.currentTime/60;
    minutes = Math.floor(minutes)
   return minutes
    
  }

  getSeconds() {
    if(this.currentTime === 0){
      return 0;
    }
    let seconds = this.currentTime % 60;
      return seconds;
  }

  computeTwoDigitNumber(value) {
    if(value <= 9){
      return `0${value}`
    } else {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
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
