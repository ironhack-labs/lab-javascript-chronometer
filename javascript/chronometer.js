class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;


  }

  start(callback) {

      this.intervalId = setInterval(() => {
        this.currentTime++
      }, 1000)

    
  
  }

  getMinutes() {
    // ... your code goes here

    return Math.floor(this.currentTime/60)

  }

  getSeconds() {
    // ... your code goes here

    return Math.floor(this.currentTime%60)
  }

  computeTwoDigitNumber(value) {

    if (
    value < 10 ){
      return '0' + value
  }else{
    return value.toString()
  }


  }

  stop() {
    // ... your code goes here

    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
   this.currentTime = 0
  }

  split() {

    // ... your code goes here
    
  const minutes = this.computeTwoDigitNumber(this.getMinutes())
  const seconds = this.computeTwoDigitNumber(this.getSeconds())
  return minutes + ':' + seconds 
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
