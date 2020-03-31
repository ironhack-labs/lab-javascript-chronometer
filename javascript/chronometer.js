class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    setInterval(obj => this.currentTime++, 1000)
  }
  getMinutes() {
    const minutes = parseInt(this.currentTime / 60)
    return minutes
  }
  getSeconds() {
    const minutesInSeconds = this.getMinutes() * 60
    const remainingSeconds = this.currentTime - minutesInSeconds
    return remainingSeconds
  }
  twoDigitsNumber(number) {
    if (number.toString().length === 1) {
      return `0${number.toString()}`
    }

    return number.toString()
  }
  stopClick() {
    clearInterval(1)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
  }
}
