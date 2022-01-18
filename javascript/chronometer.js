class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null

        // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval(() => {
    this.currentTime++
      
    }, 1000)
    
  }

  getMinutes() {
    
    const minutes = this.currentTime/60
    return parseInt(minutes)
    // ... your code goes here
  }

  getSeconds() {
    const seconds = this.currentTime%60
    return parseInt(seconds)
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10){
      return `0${value}`
    } else {
      return  `${value}`
    }
    
  }

  stop() {
    clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0
    // ... your code goes here
  }

  split() {
    const minNotFormat = this.getMinutes()
    const secondsNotFormat = this.getSeconds()

    let minutes = this.computeTwoDigitNumber(minNotFormat)
    let seconds = this.computeTwoDigitNumber(secondsNotFormat)
    
    return `${minutes}:${seconds}`
    
    // ... your code goes here
  }

  talkme(){
    alert('heloooo')
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}



