class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.currentMilliseconds = 0
    this.intervalIdMil = 0
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      printTime()
    }, 1000)
    this.intervalIdMil = setInterval(() => {
      if (this.currentMilliseconds < 100) {
        this.currentMilliseconds++
      } else if (this.currentTime === 0) {
        this.currentTime++
      } else {
        this.currentMilliseconds = 0
      }
      printMilliseconds()
    }, 10)
  }
  getMilliseconds() {
    return parseInt(this.currentMilliseconds)
  }
  getMinutes() {
    return parseInt(this.currentTime / 60)
  }
  getSeconds() {
    return this.currentTime - (this.getMinutes() * 60)
  }
  twoDigitsNumber(numberToConvert) {
    let timeToString = ''

    numberToConvert < 10 ? (timeToString = `0${numberToConvert}`) : (timeToString = `${numberToConvert}`)

    return timeToString
  }
  stopClick() {
    console.log('STOP');
    clearInterval(this.intervalId)
    clearInterval(this.intervalIdMil)
  }
  resetClick() {
    this.currentTime = 0
    this.currentMilliseconds = 0
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`
  }
}
