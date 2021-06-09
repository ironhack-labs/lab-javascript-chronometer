class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId =  setInterval(() => {
      this.currentTime++
    }, 1000)
  }


  getMinutes() {
   let minutes = this.currentTime / 60
  return parseInt(minutes)
  }

  getSeconds() {
    let seconds = (this.currentTime % 60)
    return seconds
  }//27

  //value = 7  retorna "07" - padStart() 
  computeTwoDigitNumber(value) {
   return value.toString().padStart(2, 0)
  }

  stop() {
    return clearInterval(this.intervalId)
    
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes()) 
    const seconds =  this.computeTwoDigitNumber(this.getSeconds())
    return minutes, ':', seconds
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

