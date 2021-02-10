class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0 
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {this.currentTime +=1 ; callback()}, 10)
  }
  getMinutes() {
    let minute = 0
    if (this.currentTime >= 6000) {
      minute = Math.floor(this.currentTime/6000)
    }
    return minute
  }
  getSeconds() {
    let second = 0
    if (this.currentTime/1000 > 0) {
      second = Math.floor((this.currentTime % 6000)/100) 
    }
    return second
  }

  getMiliseconds() {
    let miliSecond = 0
    if (this.currentTime/1000 > 0) {
      miliSecond = Math.floor(this.currentTime % 100)
    }
    return miliSecond
  }

  twoDigitsNumber(value) {
    if (value < 10) {
      return "0"+value
    } else {
      return `${value}` //value.toString()        
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let miliSec = this.getMiliseconds()
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}:${this.twoDigitsNumber(miliSec)}`
  }
}
