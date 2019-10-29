class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.second = 0
    this.minutes = 0
  }
  startClick() {
    const increment = () => {
      // console.log(this.currentTime)
      this.currentTime = this.currentTime + 1
      printTime()

    }

    this.intervalId = setInterval(increment, 1000)
  }

  getMinutes() {
    const min = Math.floor(this.currentTime / 60)

    return min
    //console.log(min)
  }
  getSeconds() {
    const sec = this.currentTime - (this.getMinutes() * 60)

    return sec
  }
  twoDigitsNumber(num) {
    if (num < 10) { return "0" + num.toString() }
    else { return num.toString() }

  }
  stopClick() {

    this.intervalId = clearInterval(this.currentTime)

  }
  resetClick() {

    this.currentTime = 0

  }
  // splitClick() {}
}