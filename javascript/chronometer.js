class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
   
  }

  start(callback) {
    if(this.intervalId !== null)return;
    this.intervalId= setInterval(() => {
      this.currentTime++
      if(typeof callback === "function" ) {
        callback()
      }
    }, 1000);
    // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
     return Math.floor(this.currentTime % 60)
    
  }

computeTwoDigitNumber(value) {
    return value.toString().padStart(2, "0");
}


  stop() {
    clearInterval(this.intervalId)
    this.intervalId = null;
    
  }

  reset() {
    this.currentTime= 0;
      
  }

  split() {
   const minutes = this.getMinutes();
   const seconds = this.getSeconds();

    const minutesFormat = this.computeTwoDigitNumber(minutes);
    const secondsFormat = this.computeTwoDigitNumber(seconds);

    return `${minutesFormat}:${secondsFormat}`
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
