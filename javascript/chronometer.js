class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() =>
      this.currentTime++, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return (this.currentTime - Math.floor(this.getMinutes() * 60))
  }
  twoDigitsNumber(number) {
    number = number.toString()
    if (number.length < 2) {
      return `0${number}`
    } else {
      return number
    }
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