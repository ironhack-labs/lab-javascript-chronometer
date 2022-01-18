class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId= null
    // ... your code goes here
  }

  start() {
    

    this.intervalId = setInterval(()=>{
      this.currentTime++

    },1000)
    // ... your code goes here
  }

  getMinutes() {
    return parseInt(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime%60
  }

 
  computeTwoDigitNumber(value) {
    if(value.toString().length ==1){
      return `0${value}`
    }else{
      return`${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let m = this.getMinutes()
    let s = this.getSeconds()
    let minutes = this.computeTwoDigitNumber(m)
    let seconds = this.computeTwoDigitNumber(s)
    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
