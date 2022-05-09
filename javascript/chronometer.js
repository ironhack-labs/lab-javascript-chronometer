class Chronometer {
  constructor() {
    this.currentTime=0
    this.intervalId=null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime+=1
      if (callback) callback()
    }, 1000)
    
    // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
    
  }

  getSeconds() {
    return Math.floor(this.currentTime%60)
  }

  computeTwoDigitNumber(value) {
    
    if (value<10) {
      value = '0' + value.toString()
    }
    return (value.toString())
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0
  }

  split() {
    let sec = this.getSeconds()
    let min = this.getMinutes()
    return (this.computeTwoDigitNumber(min) + ':' + this.computeTwoDigitNumber(sec))
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
