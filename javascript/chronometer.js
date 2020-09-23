class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = ''
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      callback()
      this.currentTime +=0.01
    }, 10)
  }
  getMinutes() {
    let time = this.currentTime
    let minutes = 0
    if (time >= 60) {
      minutes = time / 60
    }
    return Math.floor(minutes)
  }
  getSeconds() {
    let time = this.currentTime
    let seconds = time%60
    return seconds.toFixed([0])
  }
  getMiliseconds() {
    let time = this.currentTime
    let mil = time.toString()
      return Math.floor(mil.substring(3,5))
  }
  twoDigitsNumber(number) {
    if (number < 10) {
      return ('0' + number)
    } else {
      return (number.toString())
    }
  }
  stopClick() {  
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let sec = this.twoDigitsNumber(this.getSeconds())
    let min = this.twoDigitsNumber(this.getMinutes())
    let mil = this.twoDigitsNumber(this.getMiliseconds())
    return (min + ':' + sec + ':' + mil)
  }
}
