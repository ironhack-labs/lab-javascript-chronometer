class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId
  }


  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      printTime()
      return this.currentTime
    }, 1000);
  }
  getMinutes() {
    //console.log(this.currentTime)
    return Math.floor(this.currentTime / 60)

  }
  getSeconds() {
    return this.currentTime % 60
  }
  twoDigitsNumber(value) {
    if (value < 10) {
      return `0${value}`
    }
    //console.log(value)
    return `${value}`
  }
  stopClick() {
    return clearInterval(this.intervalId)
  }
  resetClick() {

    //console.log(this.currentTime)
    return this.currentTime = 0
  }
  // splitClick() {}
}