class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    setInterval(obj => {
      this.currentTime++
      callback()
    }, 1000)
  }
  getMinutes() {
    const minutes = parseInt(this.currentTime / 60)
    return minutes
  }
  getSeconds() {
    const minutesInSeconds = this.getMinutes() * 60
    const remainingSeconds = this.currentTime - minutesInSeconds
    return remainingSeconds
  }
  twoDigitsNumber(number) {
    if (number.toString().length === 1) {
      return `0${number.toString()}`
    }
    return number.toString()
  }
  stopClick() {
    clearInterval(1)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    const min = this.getMinutes()
    const sec = this.getSeconds()
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`
  }
}
