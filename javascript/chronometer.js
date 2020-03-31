class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      callback()
      this.currentTime++
    }, 1000)
  }

  getMinutes() {
    return parseInt(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  twoDigitsNumber(number) {
    return number < 10 ? '0' + number : '' + number
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
