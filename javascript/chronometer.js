class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() =>
      this.currentTime++, 10)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }
  getSeconds() {
    return Math.floor((this.currentTime / 100) - (this.getMinutes() * 60))
  }

  getMilliseconds() {
    return Math.floor(this.currentTime)
  }

  twoDigitsNumber(number) {
    number = number.toString()
    if (number.length < 2) {
      return `0${number}`
    } else if (number.length > 2) {
      number.slice(-2)
      else {
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
      let mil = this.twoDigitsNumber(this.getMilliseconds())
      return `${min}:${sec}:${mil}`
    }
  }