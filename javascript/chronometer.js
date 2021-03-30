class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {
    this.intervalId = setInterval(()=>{this.currentTime++}, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return this.currentTime%60
  }

  getMiliseconds(){

  }

  twoDigitsNumber(value) {
    if (value < 10){
      return `0${value}`
    }else{
      return `${value}`
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
    clearInterval(this.intervalId)
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}
