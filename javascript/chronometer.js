class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
      if (typeof callback === 'function'){
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }
 
  computeTwoDigitNumber(value) {
    if (value <= 9) {
      return '0' + value;
    } else {
      return value.toString();
    }
  }


  stop() {
   clearInterval(this.intervalId);
  }

  reset() {
   this.currentTime = 0;
  }

  split() {
    // let minutes = this.getMinutes();
    // let minutesString = this.computeTwoDigitNumber(minutes); 
    // let seconds = this.getSeconds();
    // let secondsString = this.computeTwoDigitNumber(seconds);
    // // return `${minutesString}:{secondsString}`; 
    // return minutesString + ':' + secondsString;  
    return this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds());
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
