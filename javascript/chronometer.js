class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0
  }

  startClick(callback) {
    const updateCurrentTime = () => {
      this.currentTime++
    }
    this.intervalId = setInterval(updateCurrentTime, 1000)
  }

  getMinutes() {
    if (this.currentTime >= 60) {
      return parseInt(this.currentTime / 60)
    }
    else {
      return 0
    }
  }

  getSeconds() {
    if (this.currentTime<60){
      return this.currentTime
    }
    else if (this.currentTime >= 60){
      return this.currentTime % 60
    }
  }

  twoDigitsNumber(number) {
    if (number < 10){
      return '0'+ number
    }
    else {
      return '' + number
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    let min = this.getMinutes()
    let sec = this.getSeconds()
    
    if (min < 10) {
      return `${0}${min}:${0}${sec}`
    }
    else {
      return `${min}:${sec}`
    }
  }
}
