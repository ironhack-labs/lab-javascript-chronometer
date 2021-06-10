class Chronometer {
    constructor() {
     this.currentTime = 0;
     this.intervalId = null;
    }
  
    start(callback) {
        
        this.intervalId = setInterval(() => { 
        this.currentTime += 1
          console.log(this.currentTime)
        if(callback != null){
          callback();
        }
    
      }, 1000);
  
      
    }
  
    getMinutes() {
      let minutes = 0;
      minutes = this.currentTime/60;  
      console.log(Math.floor(minutes))
      return Math.floor(minutes); 
    }
  
    getSeconds() {
      let seconds = 60;
      
      return Number(this.currentTime % 60);
    }

  computeTwoDigitNumber(value) {
    
    if(value < 10){
      return '0' + value.toString()
    }else {
      return value.toString()
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    
    let timeSplit = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`

    return timeSplit;


  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
