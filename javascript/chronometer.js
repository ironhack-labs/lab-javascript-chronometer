class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentSeconds = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++ 
      if (callback) callback()      
    }, 10);
  }

  getMinutes() {
    return this.currentSeconds < 60 ? 0 : Math.floor(this.currentSeconds / 60)
  }

  getSeconds() {
    this.currentSeconds = this.currentTime / 100
    return this.currentSeconds < 60 ? this.currentSeconds : this.currentSeconds % 60
  }

  getMiliseconds() {
    return this.currentTime < 100 ? this.currentTime : this.currentTime % 100
    
  }

  computeTwoDigitNumber(value) {
    return value >= 10 ? value.toString() : `0${value}`
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds().toFixed(0))}:${this.computeTwoDigitNumber(this.getMiliseconds().toFixed(0))}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
