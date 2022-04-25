class Chronometer {
  constructor() {
    this.currentTime = 0; 
    this.intervalId = null;
  }

  start(callback) {
    const internalId = setInterval(() => {
        this.currentTime++;     
    }, 1000);
    
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    return (this.currentTime%60);
  }

  computeTwoDigitNumber(value) {
    return ('0'+value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    //const content = element.innerHTML; ??? DOM
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
