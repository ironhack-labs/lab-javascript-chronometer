class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId;
  }

  startClick = () => {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)

    return minutes
  }
  getSeconds() {
    let seconds = this.currentTime % 60
    return seconds
  }
  twoDigitsNumber(number) {
    let str = (100 + number).toString()
    let newStr = str.slice(-2)
    return newStr
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  // splitClick() {

  // }
}