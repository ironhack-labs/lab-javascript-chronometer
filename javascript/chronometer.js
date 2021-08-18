class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;

      
  }
  start(callback) {

    // ... your code goes here
  this.intervalId = setInterval(() => {
    if(callback){
    callback()
    }
    this.currentTime++
    },1000)
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
    // ... your code goes here
    if(value === 0){
      return '00'
    }

    let valueToString = value.toString()
    
    if(value < 10){
      return `0${value}`
    }
    return valueToString

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
    const min = this.computeTwoDigitNumber (this.getMinutes());
    const seg = this.computeTwoDigitNumber (this.getSeconds());
    return `${min}:${seg}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
