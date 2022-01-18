class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null // ... your code goes here
  }

  start(callback) {
    this.intervalId= setInterval (() => { 
      this.currentTime++  
    }, 1000)
    // ... your code goes here
  }

  getMinutes() {
  
   let minutes = this.currentTime / 60
   return Math.floor (minutes)
    // ... your code goes here
  }

  getSeconds() {
  let seconds = this.currentTime % 60
  return seconds
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value < 10) { 
      return "0" + value.toString()
    } else { 
    return value.toString() }
    // ... your code goes here
  }

  stop() {

  clearInterval(this.intervalId)// ... your code goes here
  }

  reset() {
   this.currentTime = 0 // ... your code goes here
  }

  split() {

    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    
    return `${minutes}:${seconds}` 
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
