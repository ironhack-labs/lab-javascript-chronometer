class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  };

  start() {
    this.intervalId = setInterval(()=>{ 
      this.currentTime += 1      
    },1000)
  };

  getMinutes() {
    return Math.floor(this.currentTime/60)
  };

  getSeconds() {
    return this.currentTime - (this.getMinutes()*60)
  };

  computeTwoDigitNumber(value) {
    let newValue = value.toString()
    if (newValue.length === 1) {
      return "0" + newValue
    }
    return newValue
  }
  
  stop() {
    clearInterval(this.intervalId)
  }
  
  reset() {
    this.currentTime = 0
  }
  
  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}