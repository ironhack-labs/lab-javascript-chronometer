class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentTimeMilliSecond = 0;
    this.intervalIdMilliSecond = 0;
  }
  addMilliSecond = () => {
    this.currentTimeMilliSecond++
  }
  addSecond = () => {
    this.currentTime++
  }
  startClick() {
    this.intervalId = setInterval(this.addSecond, 1000)
  }
  startClickMilliSecond() {
    this.intervalIdMilliSecond = setInterval(this.addMilliSecond, 10)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return Math.floor(this.currentTime - this.getMinutes() * 60)
  }
  getMilliSeconds() {
    return Math.floor(this.currentTimeMilliSecond - this.getSeconds() * 100)
  }
  twoDigitsNumber(num) {
    return ("0" + num).slice(-2)
  }
  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.intervalIdMilliSecond)
  }
  resetClick() {
    this.currentTime = 0
    this.currentTimeMilliSecond = 0
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + " "
     + this.twoDigitsNumber(this.getSeconds()) + " " 
     + this.twoDigitsNumber(this.getMilliSeconds())
  }
}