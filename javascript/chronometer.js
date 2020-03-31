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
    let minutes = parseInt(this.currentTime / 60)
    return minutes
  }
  getSeconds() {

    let minutes = this.getMinutes()
    let seconds = this.currentTime - (minutes * 60)

    return seconds
  }
  twoDigitsNumber() {

    let minutes = this.getMinutes()
    let seconds = this.getSeconds()
    if (minutes < 10) {
      minutes = "0" + minutes
      return minutes
    }
    if (seconds < 10) {
      seconds = "0" + seconds
      return seconds
    }

  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes)
    let seconds = this.twoDigitsNumber(this.getSeconds)
    return `${minutes}:${seconds}`

  }
}