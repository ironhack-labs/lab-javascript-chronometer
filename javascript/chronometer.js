class Chronometer {
  constructor() {
    this.currentTime =0;
    this.intervalId =null;
  }

  start(callback) {
        // ... your code goes here
      this.intervalId = setInterval(()=>{
        this.currentTime++;

        if(callback){
          callback();
        }

      },1000)
      
  }

  getMinutes() {
    // ... your code goes here
    return parseInt(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    return parseInt(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let finalValue = '';

    if(value<=9){
      finalValue = '0'+value; 
    } else {
      finalValue = String(value);
    }
    return finalValue;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime=0;
  }

  split() {
    // ... your code goes here
    const minutesFormatted = this.computeTwoDigitNumber(this.getMinutes());
    const secondsFormatted = this.computeTwoDigitNumber(this.getSeconds());

    return `${minutesFormatted}:${secondsFormatted}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


