class Chronometer {
  constructor() {
   
  this.currentTime = 0
  this.intervalId= null
}

start(callback) {
  this.intervalId = setInterval(() => { 
    return this.currentTime ++ 
  },1000);
  }

  getMinutes() {
    return parseInt(this.currentTime / 60);
  }
  
  
  getSeconds() {
    return this.currentTime % 60;
  }
  
  
  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
  }
   
  
  stop() {
    return clearInterval(this.intervalId); 
  }
  
  
  
  reset() {
    return this.currentTime = 0;
  }
  
  
  
  
  split() {
    return `mm:${this.computeTwoDigitNumber(this.getMinutes) , ss:${this.computeTwoDigitNumber(this.getSeconds)`} 
  }
  
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
