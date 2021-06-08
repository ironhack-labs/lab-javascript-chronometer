class Chronometer {
  constructor() {}
  currentTime = 0;
  intervalId = null;
  start(callback) {
    this.intervalId = 
    setInterval(() => {
      this.currentTime += 1;
    },1000);
    callback;
  }

  getMinutes() {
    return Math.floor(this.currentTime /60)
  }

  getSeconds() {
      return Math.floor (this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    if(value < 10)return `0${value}`
    return `${value}`
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes(this.currentTime))
    let sec = this.computeTwoDigitNumber(this.getSeconds(this.currentTime))
    return `${min}:${sec}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}