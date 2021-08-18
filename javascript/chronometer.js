class Chronometer {
  constructor() {
    this.currentTime = 0, //milliseconds
    this.intervalId = null
  }

  start(callback) {
      this.intervalId =setInterval(() => { 
      this.currentTime += 10
      if( callback) callback()
         }, 10);
  }


  getMinutes() {
    return Math.floor(this.currentTime/60000)
  }

  getSeconds() {
    return Math.floor((this.currentTime%60000 ) / 1000)
  }

  getMilliseconds(){
    return this.currentTime % 1000
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
    let milliseconds = this.getMilliseconds(this.currentTime)

    let minutsToString = this.computeTwoDigitNumber(minuts)
    let secondsToString = this.computeTwoDigitNumber(seconds)
    let millToString = this.computeTwoDigitNumber(milliseconds)

    console.log(`${minutsToString}:${secondsToString}:${millToString}`)
    return `${minutsToString}:${secondsToString}:${millToString[0]}${millToString[1]}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
