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
    let minutes = this.currentTime / 60 
    return parseInt(minutes.toFixed(2))
  }
  getSeconds() {
    let minutes = this.getMinutes() * 60
    return this.currentTime - minutes
  }
  twoDigitsNumber(num) {
    if (num <= 10) {
      return `0${num}`
    } else {
      return `${num}`
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
    return `${min}:${sec}`
  }
}
