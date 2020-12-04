class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval (() => {
      this.currentTime++
    }, 10)
  }
  getMinutes() {
    return Math.floor(parseInt(this.currentTime/6000))
  }
  getSeconds() {
    if (this.currentTime < 6000) {
      return Math.floor(parseInt(this.currentTime/100))
    } else {
      return (this.currentTime - Math.trunc(parseInt(this.currentTime/6000))*6000)/100
    }
  }
  getCentiSeconds() {
    let numLength = this.currentTime.toString().length
    if (numLength == 1) {
      return '0' + this.currentTime
    } else if (numLength == 2) {
      return this.currentTime
    } else {
      return parseInt(this.currentTime.toString()[numLength-2] + this.currentTime.toString()[numLength-1])
    }
  }
  twoDigitsNumber(num) {
    if (num.toString().length === 2) {
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
    min = Math.trunc(this.getMinutes());
    sec = Math.trunc(this.getSeconds());
    dec = this.getCentiSeconds();
    if (min < 10 && sec < 10) {
        return `0${min}:0${sec}:${dec}`
      } else if (min < 10 && sec > 10) {
        return `0${min}:${sec}:${dec}`
      } else if (min > 10 && sec < 10) {
        return `${min}:0${sec}:${dec}`
      } else {
        return `${min}:${sec}:${dec}`
      }
  }
}
