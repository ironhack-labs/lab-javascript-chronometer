class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

    // ... your code goes here
  }

  start(callback) {
    
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if(callback){
          callback();
        }
      }, 1000);
  

  
    // ... your code goes here
  }
  
  getMinutes() {
    const minutes = (this.currentTime - this.currentTime%60)/60
    return minutes;

    // ... your code goes here
  }

  getSeconds() {
    const seconds = this.currentTime%60;
    return seconds;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    
    let stringValue = String(value);
    if(stringValue.length === 1){
      stringValue = `0${value}`
    }
    return stringValue;


    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes()); 
    const seconds = this.computeTwoDigitNumber(this.getSeconds()); 
    return `${minutes}:${seconds}`;
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
