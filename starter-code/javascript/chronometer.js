class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0
  }
  startClick = () => this.intervalId = setInterval(() => this.currentTime++,1000)
  getMinutes = () => Math.floor(this.currentTime / 60)
  getSeconds = () => Math.abs(this.getMinutes() * 60 - this.currentTime)
  getMiliSeconds = () => this.currentTime / 1000
  twoDigitsNumber = (number) => (number < 10) ? '0' + number : String(number)
  stopClick = () => clearInterval(this.intervalId)
  resetClick = () => this.currentTime = 0
  splitClick = () => `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}`
  // splitClick = () => `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:${chronometer.twoDigitsNumber(chronometer.getMiliSeconds())}`
}