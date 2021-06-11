class Chronometer {
    constructor() {
     this.currentTime = 0;
     this.intervalId = null;
    }
  
    start(callback) {
        
        this.intervalId = setInterval(() => { 
        this.currentTime += 1
          
        if(callback !== null){
          callback();
        }
    
      }, 1000);
  
      
    }

    getMilli() { // I have to create a new interval for milli
      let milli = 0;
      milli = (Number(this.currentTime % 60) * 1000) % 99
      
      return Number(milli)
    }
  
    getMinutes() {
      let minutes = 0;
      minutes = this.currentTime/60;  
      return Math.floor(minutes); 
    }
  
    getSeconds() {
      return Number(this.currentTime % 60);
    }

  computeTwoDigitNumber(value) {
    
    if(value < 10){
      return '0' + value
    }else {
      return '' + value
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    
    let timeSplit = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getMilli())}`
    return timeSplit;


  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
