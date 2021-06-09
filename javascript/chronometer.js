class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }
  start(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime += 1
      if (callback) {
        callback()
      }
    },1000) 
  }
  getMinutes() {
   let result = Math.floor(this.currentTime / 60)
   return result
  }
  getSeconds() {
    if (this.currentTime < 60) {
      return this.currentTime
    } else {
      return this.currentTime-60
    }
  }
  computeTwoDigitNumber(value) {
    let numberToAdd = "0"
    let toString = value.toString()
    if (value >= 10) {
      return toString
    } else if(value === 0) {
      return "00"
    } else {
      return numberToAdd += toString
    }
  }
  stop() {
    clearInterval(this.intervalID)
  }
  reset() {
    this.currentTime = 0
  }
  split() {
  }
}

if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
