class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick() {
    this.intervalId = setInterval(() => this.currentTime++, 1000)
  }
  getMinutes() {
    // if (this.currentTime > 60) {
    return Math.floor(this.currentTime / 60)
    // } else if (this.currentTime == 0) return 0
  }
  getSeconds() {
    // if (this.currentTime > 0) {
    return this.currentTime % 60
    // } else if (this.currentTime == 0) return 0
  }
  twoDigitsNumber(num) {
    let number = Math.floor(num / 10)
    let decimal = num % 10
    let wholeNumber = `${number}${decimal}`
    return wholeNumber
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
