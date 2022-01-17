class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (callback !== undefined) {
      callback();
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);
    }
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
  let seconds = this.currentTime%60;
  return seconds;
  }

  computeTwoDigitNumber(value) {
    let returnString = value.toString();
    if (returnString.length < 2){
      return "0" + returnString;
    }else{
      return returnString;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let timeMin = this.computeTwoDigitNumber(this.getMinutes());
    let timeSec = this.computeTwoDigitNumber(this.getSeconds());
      
    return `${timeMin}:${timeSec}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
