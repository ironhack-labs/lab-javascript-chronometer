class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0

    }
  startClick(callback) {
    // ... your code goes here
    const intervalId=setInterval(() => this.currentTime++, 1000)
    
  }
  getMinutes() {
    // ... your code goes here
    const minutes=this.currentTime/60
    return parseInt(minutes)
  }
  getSeconds() {
    // ... your code goes here
    const seconds = this.currentTime-((parseInt(this.currentTime/60))*60)
    return seconds
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    let doble = " "
    if (number < 10) {
      doble = "0".concat(number.toString())
      return doble
     } else {
       doble = number.toString()
       return doble
     }

  }
  stopClick(intervalId) {
    // ... your code goes here
    clearInterval(intervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime=0
  }
  splitClick() {
    // ... your code goes here
    let min = this.getMinutes()
    let sec = this.getSeconds()
    if (min < 10) {
      return `${0}${min}:${0}${sec}`
    } else {
      return `${min}:${sec}`
    }
  }
}
