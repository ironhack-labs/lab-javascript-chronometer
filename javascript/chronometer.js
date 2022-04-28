class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
      this.intervalId = setInterval( () => {
        this.currentTime++;
        if(callback) {
          callback();
        }
      }, 1000);
    }


  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime%60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let TwoDigitNumber;
    if (value<10) {
      TwoDigitNumber = "0"+ value;
    } else if (value<99) {
      TwoDigitNumber = value.toString();
    }
  return TwoDigitNumber;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let splitMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let splitSeconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${splitMinutes}:${splitSeconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
