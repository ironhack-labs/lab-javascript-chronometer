

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null; 
  }

  start(callback) {

    this.intervalId=setInterval(()=>{
      this.currentTime++

      if (callback)callback();
     },1000)

   
  }

  getMinutes() {
    
    return Math.floor(this.currentTime/60)
   
  }

  getSeconds() {
    // ... your code goes here
   return this.currentTime % 60;

  }
  getMiliSeconds(){
    return this.currentTime % 1000;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
 
  }
  stop() {

    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0
  }

  split() {
    
    return `${this.computeTwoDigitNumber(this.getMinutes())}${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
