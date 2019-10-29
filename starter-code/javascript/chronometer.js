class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId
  }
  startClick(printTime) {
    this.intervalId = setInterval(() => {
      printTime()
      this.currentTime++ 

    }, 1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)

    return minutes
  }

  getSeconds() {
    return this.currentTime % 60
  }

  twoDigitsNumber(num) {
    let minutes = ""
    let seconds = ""

    if (num.toString().length == 2) {
      minutes = num.toString()
      return minutes

    } else if (num.toString().length < 2) {
      minutes = "0" + num
      return minutes
    }

  }

  stopClick() {
    // clearInterval = this.intervalId 
    clearInterval(this.intervalId)

  }

  resetClick() {
    this.currentTime = 0
  }
  // splitClick() {}
}