class Chronometer {
    constructor() {
     this.currentTime = 0;
     this.currentTimeMilli = 0;
     this.intervalId = null;
     this.intervalMilliId = null;
    }
  
    start(callback) {
        
        this.intervalId = setInterval(() => { 
        this.currentTime += 1
          
        if(callback !== null){
          callback();
        }
    
      }, 1000);
  
      
    }

    startMilli(callbackMilli) { // I have to create a new interval for milli
      this.intervalMilliId = setInterval(() => {
        this.currentTimeMilli += 1

        if(callbackMilli !== null){
          callbackMilli();
        }
      }, 1)
    }

    getMilli(){
      return Number(this.currentTimeMilli % 100)
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
    clearInterval(this.intervalMilliId)
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
