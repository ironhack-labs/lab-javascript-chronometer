class Chronometer {
  constructor() {
    // now - in seconds *100
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalID = setInterval(()=> {
      // console.log(this.currentTime);
      this.currentTime += 1;
      if (typeof(callback) == 'function'){  //check here
        callback();
      }
  }, 10)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 6000) ;
    return minutes;
  }

  getSeconds() {
    let secondsAfterMinute = Math.floor((this.currentTime / 100) % 60);
    return secondsAfterMinute;

  }

  getMilliseconds(){
    let millisecondsAfterSecond = Math.floor(this.currentTime % 100);
    return millisecondsAfterSecond;
  }

  computeTwoDigitNumber(value) {
    if (value < 10){
      return "0" + value;
    }else{
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalID);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let str = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getMilliseconds())}`
    return str;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
