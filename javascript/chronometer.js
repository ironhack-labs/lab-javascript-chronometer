class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(()=>{
      callback()
      this.currentTime++
    }, 1000)
  }
  getMinutes() {
    return Math.floor((this.currentTime/60))
  }
  getSeconds() {
    return this.currentTime%60
  }
  twoDigitsNumber(number) {
      number = `${number}`
      return number.padStart(2, 0)
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes())
    let sec = this.twoDigitsNumber(this.getSeconds())
    return `${min}:${sec}`
  }
}