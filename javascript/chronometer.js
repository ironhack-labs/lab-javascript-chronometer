class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
  }
  getMinutes() {
    let mins = this.currentTime / 60
    return Math.floor(mins)
  }
  getSeconds() {
    let min = this.getMinutes()
    return this.currentTime - min*60
  }
  twoDigitsNumber(num) {
    if (num < 10)
      return "0" + num.toString()
    return num.toString()
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
