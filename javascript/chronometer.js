class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.invervalid = null;
  }

  start(callback) {
    const that = this;
    setInterval(function() {
      return that.currentTime += 1;
    }, 1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    if(this.currentTime > 59) {
      let seconds = this.currentTime % 60;
      return seconds;
    } else {
      return this.currentTime;
    }

  }

  computeTwoDigitNumber(value) {
    let str = value.toString();
    if(str.length == 1) {
      return 0 + value.toString();
    } else {
      return str;
    }
  }

  stop() {
    return clearInterval(this.invervalid)
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    return `${minutes}:${seconds}`
  }
}

//

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
