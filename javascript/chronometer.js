class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    this.minutes = 0
    this.seconds = 0
    this.milliseconds = 0

  }

  start(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      if (callback) callback();
   }, 1000); 

  }


  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() { 
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }



  reset() {
    this.currentTime=0
  }


  split() {
    
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
