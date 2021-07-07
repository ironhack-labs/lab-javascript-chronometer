class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {           
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) {callback()} 
    }, 1000);
    return this.intervalId;    
  }

  getMinutes() {
    // get and return minutes from seconds. 
    let seconds = Number(this.currentTime);
    let minutes = Math.floor(seconds/60);
    return minutes;
  }

  getSeconds() {
    // get and return the rest of seconds. 
    if (this.currentTime === 0) {return 0}
    let seconds = Number(this.currentTime);
    let getRest = (seconds%60);
    return getRest;
  }

  computeTwoDigitNumber(value) {
    // return "0" + digit number < 10.
    let newVal;
    if (value < 10) {
      newVal = '0' + value;
    } else {
      newVal = String(value);
    }
    return newVal;
  }

  stop() {
    // clear interval.
    clearInterval(this.intervalId);
  }

  reset() {
    // reset current time.
    this.currentTime = 0;
  }

  split() {
    let convertedMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let convertedSeconds = this.computeTwoDigitNumber(this.getSeconds());
    return convertedMinutes + ":" + convertedSeconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

let chrono = new Chronometer;

chrono.start();
