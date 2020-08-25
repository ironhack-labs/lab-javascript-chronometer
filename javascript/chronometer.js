class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
      // Se deja así porque no funcionaba la callback correctamente
      printTime()
    }, 1000)
  }
  getMinutes() {
    let minutes = 0
    if (this.currentTime === 0) {
      return 0
    } else if (this.currentTime >= 60) {
      minutes = Math.floor(this.currentTime / 60)
      return minutes
    }
   return minutes
  }
  getSeconds() {
    let seconds = 0;
    if (this.currentTime === 0) {
      return 0
    } else if (this.currentTime < 60) {
      seconds = this.currentTime
      return seconds
    } else if (this.currentTime >= 60) {
      seconds = this.currentTime % 60
      return seconds
    }
  }
  twoDigitsNumber(num) {
    if (num < 10) {
      let digitiStr = "0" + num
      return digitiStr
    } else if (num >= 10) {
      return num.toFixed(0)
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds())
  }
}