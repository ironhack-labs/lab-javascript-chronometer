class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    if (typeof callback === 'function') {
       const intervalId = setInterval(callback, 1) 
       this.intervalId = intervalId
    } else {
      const intervalId  = setInterval(() => {
        this.currentTime += 1;
      }, 1000)
      // }, 1) 
      this.intervalId = intervalId
    }
    
  }

  getMinutes() {
    // ... your code goes here
    // return Math.floor(this.currentTime / (60* 100))
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
    // return Math.floor((this.currentTime / 100) % 60)
    return this.currentTime % 60
  }

  getMilliseconds() {
    // return Math.floor(this.currentTime % 100)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const numString = value.toString()
    if (numString.length === 1) {
      return `0${numString}`
    } else {
      return numString
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minNum = this.getMinutes()
    const min = this.computeTwoDigitNumber(minNum);
    const secNum = this.getSeconds()
    const sec = this.computeTwoDigitNumber(secNum);
    return `${min}:${sec}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
