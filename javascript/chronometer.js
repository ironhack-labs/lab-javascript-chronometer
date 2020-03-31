class Chronometer {
  constructor() {

    this.currentTime = 0

    this.intervalId = 0

  }
  startClick(callback) {

    setInterval(() => this.currentTime++, 1000)

  }
  getMinutes() {

    return Math.floor(this.currentTime / 60)

  }
  getSeconds() {

    return Math.floor(this.currentTime - this.getMinutes(this.currentTime) * 60)

  }
  twoDigitsNumber(num) {


    const twoDigits = num.toString()

    let sumDigits = ""

    if (twoDigits.length === 1) {
      sumDigits = "0" + twoDigits
    }

    return sumDigits
  }
  stopClick() {

    return clearInterval(this.intervalId)

  }
  resetClick() {

    return this.currentTime = 0

  }
  splitClick() {

    let getMinutes = this.twoDigitsNumber(this.getMinutes(this.currentTime))
    let getSeconds = this.twoDigitsNumber(this.getSeconds(this.currentTime))

    return `${getMinutes}:${getSeconds}`


  }
}
