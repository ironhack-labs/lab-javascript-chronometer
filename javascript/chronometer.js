const { start } = require("repl");
const { number } = require("yargs");

class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;
   
  
  
 }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();

      }
    }, 1000);
  }

  getMinutes() {
    let minutes = (this.currentTime/60);
    minutes = Math.floor (minutes);
    return minutes;
  }


  getSeconds() {
    if (this.currentTime < 60) {
    return this.currenTime;
    } else if (this.currentTime % 60 === 0) {
      return this.currentTime;
    }
  }

  computeTwoDigitNumber(value) {
   let number = value.toString();
   if (number.length === 2) {
     return number;
  
   } else {
     return `0${value}`;
   }
    

  }

  stop() {
    clearInterval(this.IntervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber(minutes)+":"+this.computeTwoDigitNumber(seconds);

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
