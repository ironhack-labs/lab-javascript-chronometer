class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval (()=>{
      this.currentTime ++;
    },1000);
  }

  getMinutes() {
    return (Math.floor(this.currentTime/60));
  }

  getSeconds() {
    return (this.currentTime%60);
  }

  computeTwoDigitNumber(value) {
    string = value.toString();
    if (string.length<1){
      console.log(`0 ${string}`);
    } else {
      console.log(string);
    }
  }

  stop() {
   clearInterval(this.intervalId); 
  }

  reset() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
