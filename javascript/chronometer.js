class Chronometer {
  constructor() {
    this.currentTime =0;
    this.intervalId = null;  
  }
  
  start(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++ //The increment operator (++) increments (adds one to) its operand and returns a value. If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
    }, 1000) //thousand miliseconds = 1 sec
  }

  getMinutes() {
    let minutes = this.currentTime  / 60;
    return Math.floor(minutes)
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds
  }

  computeTwoDigitNumber(value) {
    //turn into two-digits number any received value.
    if (value < 10) {
      return 0 + value.toString() 
    } else if (value > 10){
      return value.toString()
    } else if (value === 0){
      return "00"
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime=0;
    // .innerHTML?
  }

  split() {
    //"mm:ss"
    let splitTime = this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
  }

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
