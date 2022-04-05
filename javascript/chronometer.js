class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(()  =>{
  if (callback)
  callback()
  this.currentTime++},1000)  }

  getMinutes() {
    const minute = Math.floor(this.currentTime / 60)
    return minute
  }

  getSeconds() {
    const second = Math.floor(this.currentTime % 60)
    return second
  }

  computeTwoDigitNumber(value) {
    if (value <= 9){
      return `0${value}`
    }
    else {
      return `${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const minute = this.computeTwoDigitNumber(this.getMinutes())
    const second = this.computeTwoDigitNumber(this.getSeconds())
    return minute + ":" + second
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
