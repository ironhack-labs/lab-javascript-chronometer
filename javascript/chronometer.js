class Chronometer {
  constructor() {
    let currentTime = 0;
    let intervalId = null; 
  }
  
  start(callback){

    let i = 0;

    this.intervalId = setInterval((callback) => {

      i++;

      if(callback){
        callback(intervalId);
      }
      
    }, 1000);

    return intervalId;

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
