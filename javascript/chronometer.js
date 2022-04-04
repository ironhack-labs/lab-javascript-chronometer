class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    const intervalId = setInterval( () => {
      if (callback){
        callback();
      }
      this.currentTime++}, 1000); 

    this.intervalId = intervalId;  
  }

  getMinutes() {
    let minutes = (this.currentTime/60);
    minutes = Math.floor (minutes);
    return minutes;
  }

  getSeconds() {
    let secondsAfterMinute = this.currentTime % 60;
    return secondsAfterMinute;
  }

  computeTwoDigitNumber(value) {
    let twoDigit = (value).toLocaleString(undefined, {minimumIntegerDigits: 2});
    return twoDigit;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes() 
    let seconds = this.getSeconds ()
   let timestamp = this.computeTwoDigitNumber(minutes) +":"+ this.computeTwoDigitNumber(seconds)
   return timestamp;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
