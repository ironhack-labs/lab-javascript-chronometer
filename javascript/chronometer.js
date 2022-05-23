class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
   
    if (!this.intervalId) {
    this.intervalId = setInterval(() => {
      if (callback) {
        callback
      }
      this.currentTime++
    } , 1000)
  }
  }

  getMinutes() {
    
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    
    return [0, value].join("").slice(-2)
    /*otra forma -> return String("0" + value).slice(-2)*/
  }

  stop() {
   
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  reset() {
    
    this.currentTime = 0
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
