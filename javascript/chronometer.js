class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(callback) {
    if(!this.intervalId){
      this.intervalId = setInterval(()=>{
        this.currentTime++
        if(callback){
          callback
        }
      }, 1000)
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0')
  }

  stop() {
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
