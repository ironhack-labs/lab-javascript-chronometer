class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    const intervalID = setInterval(() => this.currentTime++, 1000)
    return this.currentTime
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    const minutes1 = Math.floor(this.currentTime / 60)
    const seconds = this.currentTime - minutes1 * 60
    return seconds
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return `0${number}`
    } if (number > 10) {
      return `${number}`
    }
  }

  stopClick() {
    clearInterval(this.intervalID)
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    let min = this.getMinutes
    let sec = this.getSeconds
    return `${this.twoDigitsNumber(min)} : ${this.twoDigitsNumber(sec)}`

  }
}