class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId
  }
  startClick() {
    this.intervalId = setInterval(()=>{
      this.currentTime++
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return (this.currentTime - this.getMinutes() * 60)
  }
  twoDigitsNumber(number) {
    if (number > 9) {
      return number.toString(10)
    } else {
      return `0${number}`
    }
  }
  stopClick() {
    return clearInterval(this.intervalId)
  }
  resetClick() {
    return this.currentTime = 0
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}