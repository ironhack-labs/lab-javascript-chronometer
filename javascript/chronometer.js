class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (typeof callback !== "function") {
      this.intervalId = setInterval(()=>{
        this.currentTime++
    }, 1000)
    } else {
      this.intervalId = setInterval(()=>{
        this.currentTime++
        callback (this.getMinutes(), this.getSeconds())
      }, 1) 
    }
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60)
    return minutes
  }

  getSeconds() {
    let seconds =Math.floor(this.currentTime%60)
    return seconds
  }

  computeTwoDigitNumber(value) {
    return String(value).padStart(2, '0')
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
  return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
