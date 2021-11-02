class Chronometer {
  constructor() {
     this.currentTime = 0;
     this.intervalId = null;
  }

  start() {
    const chrono = ()=> {
      this.currentTime++;
     } 
     this.intervalId = setInterval(chrono, 1000);
    
  }

  getMinutes() {
    let minutes = 0;
   if (this.intervalId % 60 === 0 ){
     minutes++;
     
   }else if( this.intervalId === null ){
     return 0;
   }
   return minutes;
  }

  getSeconds() {
    

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
