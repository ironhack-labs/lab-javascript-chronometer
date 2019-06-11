class Chronometer {
  constructor() {

    this.currentTime = 0
    

  }
  startClick() {
    
    this.intervalId = setInterval (() => {
      this.currentTime += 1
      // console.log(this.currentTime)
    },1000)
  }

  getMinutes() {
    let currentTimeMin = this.currentTime / 60 
    return Math.floor(currentTimeMin)

  }
  getSeconds() {
    
    return this.currentTime%60
    

  }
  twoDigitsNumber(time) {
    let time2Digits = time.toString()
    if (time2Digits.length === 1) {
      return "0" + time2Digits 
    } 
    return time2Digits
  }
  stopClick() {
    clearInterval(this.intervalId) 
  }
  resetClick() {

  }
  // splitClick() {}
}