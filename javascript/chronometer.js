class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
   
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback){
      callback()
      } else{
      this.currentTime += 1
      }  
    }, 1000);
    
  }

  getMinutes() {
    return parseInt(Math.floor(this.currentTime / 60));
    
  }

  getSeconds() {
    return parseInt(this.currentTime % 60);
    
  }

  computeTwoDigitNumber(value) {
    if(value < 10  ){ 
      return ('0' + value.toString())

    }
    else{
      return value.toString()
    }
  }

  stop() {
    
  }

  stop() {
    clearInterval(this.intervalId);
    
  }

  reset() {
    this.currentTime = 0;
    
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes()
      )}:${this.computeTwoDigitNumber(this.getSeconds())}`
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
