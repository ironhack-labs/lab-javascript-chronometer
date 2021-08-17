class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
    this.minutes = 0
    this.seconds = 0
  }

  start(callback) {
    // ... your code goes here
    
    this.intervalId = setInterval(()=>{
        if (callback){
        callback()
      }
      this.currentTime++
    }, 1000)
    
  }

  getMinutes() {
    // ... your code goes here
    this.minutes = this.currentTime/60
    /*if (this.currentTime % 60 === 0){
       minutes++
    }*/
    this.minutes = Math.floor(this.minutes)
    return this.minutes
  }

  getSeconds() {
    // ... your code goes here
    this.seconds = this.currentTime % 60

    return this.seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let str = String(value) 
    if (str.length === 1){
      return "0" + str
    }
    return str

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
   // return this.currentTime
  }

  split() {
    // ... your code goes here
    let splitTime = ""
    let twoMinutesDigits = this.computeTwoDigitNumber(this.getMinutes())
    let twoSecondsDigits = this.computeTwoDigitNumber(this.getSeconds())
    splitTime = "" + twoMinutesDigits + ":" + twoSecondsDigits
    
    return splitTime
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
