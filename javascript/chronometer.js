class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(()=>{
      callback()
      this.currentTime += 1
    }, 1000)
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    return this.currentTime % 60
  }
   
  computeTwoDigitNumber(value) {
   const valueString = value.toString()
   if(valueString.length < 2){
     return `0${valueString}`
   }else {
     return valueString
   }
}
  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const minutes =  this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

