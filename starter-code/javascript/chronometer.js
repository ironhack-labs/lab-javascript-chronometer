class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0
  }
  startClick(printTime) {
    this.intervalId = setInterval(() => {
      printTime()
      this.currentTime++
    }, 100)
    
  }

  getMinutes() {
    return Math.floor(this.currentTime / 600)
  }
  getSeconds() {
    return this.currentTime - this.getMinutes() * 600
  }
  getMilliseconds(){
    return this.currentTime - this.getSeconds() * 60
  }
  twoDigitsNumber(value) {
    if (value < 100) {
      return ('00' + value).slice(-3)
    }
 
     else return value.toString()
  }
 
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
    return this.currentTime
    
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes()).slice(-2,3)}:${this.twoDigitsNumber(this.getSeconds()).slice(0,-1)}:${this.twoDigitsNumber(this.getMilliseconds()).slice(-2)}`
  }
}

