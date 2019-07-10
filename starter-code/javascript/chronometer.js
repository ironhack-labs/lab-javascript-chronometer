class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = ""
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)

  }
  getMinutes() {
    let minutes = this.currentTime / 60000
    return Math.floor(minutes)
  }
  getSeconds() {
    let seconds = this.currentTime / 1000
    return seconds
  }
  twoDigitsNumber(number) {
    alert(typeof number)
    // var str = 
    if (number < 10) { return (`0${number}`) }
    else return number
  }
  stopClick() {

  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {

  }
}