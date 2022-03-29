class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) { 
    this.intervalId = setInterval(() => {
      this.currentTime = (this.currentTime + 1); // could have also been ++ - you are using parenthesis where they are not needed.
      if(typeof callback === 'function') { //callback added after demo.
        callback ();
      }
    }, 1000);
  }
  

  getMinutes() {
    return(Math.floor(this.currentTime / 60));  
  }

  getSeconds() {
    return(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    let twoDigitString = (value.toString()); //see demo notes for another way to solve. Note: a number + 'string' = 'string'
  
      if (twoDigitString.length === 1) {
      twoDigitString = twoDigitString.padStart(2,'0');
      }
    return(twoDigitString);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() { //ADDED AFTER DEMO - three other ways demo'd to achieve - see notes.  
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
