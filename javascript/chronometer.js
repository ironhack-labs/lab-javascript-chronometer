class Chronometer {
  constructor() {
    this.currentTime = 0; // this will be in seconds 
    this.intervalId = null;
  }
  
  start(callback) {
    if(!callback || typeof callback !== 'function') {
      this.intervalId = setInterval(()=> {
        this.currentTime ++;
      }, 1000);
    } else {
      this.intervalId = setInterval(()=> {
        this.currentTime ++;
        callback();
      }, 1000)
    } 
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
    return value < 10 ? `0${value}` : value.toString();
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


