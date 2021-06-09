class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalID = setInterval(()=> {
      console.log(this.currentTime);
      this.currentTime += 1;
      if (typeof(callback) == 'function'){  //check here
        callback();
      }
  }, 1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let secondsAfterMinute = this.currentTime % 60;
    return secondsAfterMinute;
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
    let str = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
    return str;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
