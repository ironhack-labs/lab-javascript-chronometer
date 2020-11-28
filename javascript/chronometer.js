class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval (() => {
      this.currentTime++
    }, 1000)
  }
  getMinutes() {
    return Math.floor(parseInt(this.currentTime/60))
  }
  getSeconds() {
    if (this.currentTime < 60) {
      return this.currentTime
    } else {
      return this.currentTime - Math.floor(parseInt(this.currentTime/60))*60
    }
  }
  twoDigitsNumber(num) {
    if (num.length === 2) {
      return num.toString()
    } else {
      return '0' + num.toString()
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick(min, sec) {
    min = this.getMinutes();
    sec = this.getSeconds();
    if (min < 10 && sec < 10) {
        return `0${min}:0${sec}`
      } else if (min < 10 && sec > 10) {
        return `0${min}:${sec}`
      } else if (min > 10 && sec < 10) {
        return `${min}:0${sec}`
      } else {
        return `${min}:${sec}`
      }
  }
}
