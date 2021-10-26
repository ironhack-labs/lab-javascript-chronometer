class Chronometer {
  constructor() {
    // ... your code goes here
   this.currentTime = 0;
   this.intervalId = null; 
   this.miliseconds = 0


  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
      this.miliseconds = 0
    }, 1000);
    this.miliInterval = setInterval(() => {
    this.miliInterval++
  }, 10)
  }


  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60)
  
  

  }

  getSeconds() {
    // ... your code goes here
  return this.currentTime - this.getMinutes() * 60


  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  return value.toString () .padStart(2, "0")

  }

  stop() {
    // ... your code goes here
    return clearInterval (this.intervalId)

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
    return this.currentTime

  }

  split() {
    // ... your code goes here
    return 

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
