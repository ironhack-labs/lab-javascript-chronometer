class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++
    }, 1000)
  }
  getMinutes() {
    if (this.currentTime === 0){
      return 0
    } else {
      return Math.floor(this.currentTime/60)
    }
  }
  getSeconds() {
    if (this.currentTime === 0){
      return 0
    } else {
      return this.currentTime%60
    }
  }
  twoDigitsNumber(num) {
    if (String(num).length === 1){
      return '0'+String(num)
    } else if (String(num) === 2){
      return String(num)
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}