class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
      // console.log(this.currentTime)
      if(typeof callback === 'function'){
        callback();
      }
    },1000);
  };
  //change the '1000' to '10' to count miliseconds.

    /* adding the callback function conditional goes like this:
    start(callback) {
      this.intervalId = setInterval(() => {
        this.currentTime = this.currentTime + 1;
        if(typeOf callback === 'function') {
          callback();
        }
      }, 1000);
    }
    */
     
  getMinutes() {
    return Math.floor(this.currentTime / 60);
 //     return Math.floor(this.currentTime / 100); for counting milliseconds.
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if(value < 10) {
      return '0' + value;
      // return `0${value}`; ALT SYNTAX
      }  
      return value.toString();
  }

  stop() {
   clearInterval(this.intervalId);
  }

  reset() {
   setInterval(this.currentTime = 0);
  }

  split() {
   return (this.computeTwoDigitNumber(this.getMinutes())+':'+this.computeTwoDigitNumber(this.getSeconds()));
   // return `${this.computeTwoDigitNumber(this.getMinutes)}:${this.computeTwoDigitNumber(this.getSeconds)}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
