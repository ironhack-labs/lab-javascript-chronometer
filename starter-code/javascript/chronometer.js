class Chronometer {

  constructor() {

    this.currentTime = 0
    this.intervalId

  }

  startClick() {

    this.intervalId = setInterval(() => {
      this.currentTime++
      printTime()
    }, 1000)

  }


  getMinutes() {


    if (this.currenTime == 0) {
      return 0
    }

    return Math.floor(this.currentTime / 60)

  }

  getSeconds() {

    return this.currentTime % 60
  }


  twoDigitsNumber(value) {

    return value < 10 ? "0" + value : value.toString()

  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }


  // splitClick() {}
}