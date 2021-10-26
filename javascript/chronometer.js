class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  
  }
  
  start(callback) {
   // segundos
    this.intervalId = setInterval(() => {
      this.currentTime ++
    }, 1000)
    
  }
  
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
     return Math.floor(this.currentTime % 60)
  }
  

  computeTwoDigitNumber(value) {
    
    if(value < 10){
      return '0'+ value
    } else {
      return value.toString()
    }

  }

  stop() {
  
   clearInterval(this.intervalId) 

    
  }

  reset() {
    this.currentTime = 0
  }

  split() {
   
    const mm = this.computeTwoDigitNumber(this.getMinutes())
    const ss = this.computeTwoDigitNumber(this.getSeconds())
    return mm + ':' + ss
    
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
