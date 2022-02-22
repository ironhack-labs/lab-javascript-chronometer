class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

    this.milisecondsCurrentTime = 0;
    this.miliIntervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback(this.split()); //  we reference to printTime in the index.js - here we call the function
      };
    }, 1000);

    this.miliIntervalId = setInterval(() => {
      this.milisecondsCurrentTime++;
      if (callback) {
        callback(this.split()); 
      };
      }, 1);
  }
  
  getMinutes() {
    const minutes = parseInt(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
  }

  getMiliseconds() {
    const miliseconds = String(this.milisecondsCurrentTime);
    return miliseconds.slice(miliseconds.length - 2);
  }

  computeTwoDigitNumber(value) {
    let twoDigitString = String(value);
    if (twoDigitString.length === 1) {
      twoDigitString = "0"+value;
    }
    return twoDigitString;
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.miliIntervalId);
  }

  reset(callback) {
    this.currentTime = 0;
    this.milisecondsCurrentTime = 0;
    if (callback) {
      callback(this.split());
    }
  };

  split() {
    let splitTime = this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds()) + ":" + this.computeTwoDigitNumber(this.getMiliseconds());
    return splitTime;
   }
};



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
