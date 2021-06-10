class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {

     this.intervalId = setInterval( () => {
      this.currentTime += 1
    }, 1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes
     
  }   
  

  getSeconds() {
   let seconds = (this.currentTime % 60) 
    return seconds
  }

  computeTwoDigitNumber(value) {
    if (value <= 9) {
      return `0${value}`

    }
    else if (value >= 10) {
      return `${value}`

    }

    
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    let splitMin = this.computeTwoDigitNumber(this.getMinutes())
    let splitSec = this.computeTwoDigitNumber(this.getSeconds())

    let split = `${splitMin}:${splitSec}`
   return split
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
