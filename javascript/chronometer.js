class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(callback) {
      this.intervalId =setInterval(() => { 
        if( callback) callback()
      this.currentTime ++
         }, 1000);
  }


  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return Math.floor(this.currentTime%60)
  }

  computeTwoDigitNumber(value) {
    let numToString = value.toString()
    
    if (numToString.length > 1) {
      return numToString
    } else if (numToString.length <= 1) {
      return "0" + numToString
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minuts = this.getMinutes(this.currentTime)
    let seconds = this.getSeconds(this.currentTime)

    let minutsToString = this.computeTwoDigitNumber(minuts)
    let secondsToString = this.computeTwoDigitNumber(seconds)

    return `${minutsToString}:${secondsToString}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
