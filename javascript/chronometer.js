
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(callback){
        callback()
      }
    },1000)

    return this.intervalId
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    let result =  value.toString().padStart(2, '0')
    if (value < 10){
      return result
    }
    else {
      return value.toString()
    }
    
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
   let minutes =  this.getMinutes()
    let seconds = this.getSeconds()
    this.computeTwoDigitNumber()

   return ''
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
