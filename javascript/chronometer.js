class Chronometer {
  constructor() {
    
    // ... your code goes here
  
   
        this.currentTime = 0;
        this.intervalId = null ;
      }
    
      start(callback) {
        this.intervalId=setInterval(()=> {
         callback()
         this.currentTime ++ },1000)
      }
      getMinutes() {
        return Math.floor(this.currentTime/60);
      }
    
      getSeconds() {
         return (this.currentTime)%60; // this modulo will take the minutes out and show the remainder in seconds
      }
    
      computeTwoDigitNumber(value) {
        if(value < 10) return `0${value}`;
        else return `${value}`;
      }
    
      stop() {
        clearInterval(this.intervalId);
      }
    
      reset() {
        this.currentTime = 0;
      }
    
      split() {
        
        return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
      }
    }

  
  // The following is required to make unit tests work.
  /* Environment setup. Do not modify the below code. */
  if (typeof module !== 'undefined') {
    module.exports = Chronometer;
  }
    
    //const chn = new Chronometer();
    //console.log(chn.currentTime);
    //chn.start();
    //chn.stop();
  
  


  

  
  
  
  start(callback) {
    // ... your code goes here
    
  }

  getMinutes() {
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
