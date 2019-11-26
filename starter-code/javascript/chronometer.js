class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = undefined
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
      printSeconds()
    }, 1000)
    setStartBtn()
  }

  getMinutes() {
    let number = this.currentTime / 60
    return Math.floor(number)
  }

  getSeconds() {
    if (this.currentTime < 10) {
      return this.currentTime
    } else {
      return this.currentTime % 9
    } 
  }
  twoDigitsNumber(value) {
    if (value < 10)
      return `0${value}`;
    else return `${value}`
  }

  stopClick() {
    this.intervalId = clearInterval()
  }
  resetClick() {
    this.currentTime = 0
  }

  // splitClick() {}


}
