class Chronometer {
  constructor() {
    this.intervalId = null
    this.currentTime = 0

  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback !== undefined) {
        callback()
      }
      this.currentTime++
      console.log(this.currentTime)
    }, 1000)

  }






  getMinutes() {
    this.minute = Math.floor(this.currentTime / 60)
    return this.computeTwoDigitNumber(this.minute)
  }

  getSeconds() {
    this.second = this.currentTime % 60
    return this.computeTwoDigitNumber(this.second)
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {

     console.log( this.getMinutes() + ':' + this.getSeconds())
    return this.getMinutes() + ':' + this.getSeconds()
   
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}



