class Chronometer {
  constructor() {
    this.currentTime = 0; // this will be in seconds 
    this.intervalId = null;
  }
  
  start(callback) {
    this.intervalId = setInterval(()=> {
      this.currentTime ++;
      if(typeof callback === 'function') {
        callback();
      }
    }, 1000)
  }

  getMinutes() {
    // currentTime --> in seconds
    //  1min = 60 sec
    return  Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // currentTime --> seconds
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
  // convert numbers in string
  // check if the value has less than 2 digits
  // padStart--> pads the current string with another string-->second arg, until reaching the given length-->first argument
   return String(value).length < 2 
      ? String(value).padStart(2, '0') 
      : String(value);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


