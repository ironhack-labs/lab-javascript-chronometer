class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalID = null
  }

  start(callback) {
    this.intervalID = setInterval(() => {
      if (callback !== undefined) {
        callback()
      }
      this.currentTime += 1
      console.log(this.currentTime)
    }, 1000);    
 }
  
  getMinutes() {
    return this.computeTwoDigitNumber(Math.floor(this.currentTime / 60))
  }

  getSeconds() {
    return this.computeTwoDigitNumber(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    if(value < 10){
      return '0' + value.toString()
    }
    else{
   			return value.toString()
    }
  }

  stop() {
    clearInterval(this.intervalID)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return  this.getMinutes() +':'+ this.getSeconds()
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
