class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {
    // ... your code goes here
    const intervalId = setInterval(() => this.currentTime += 1, 1000)
  }

  getMinutes() {
    // ... your code goes here
    const minToSec = this.currentTime / 60
      return (parseInt(minToSec))
  }

  getSeconds() {
    // ... your code goes here
    const secToMin = this.currentTime % 60
    return secToMin
  }

  twoDigitsNumber() {
    // ... your code goes here
    const twoDigits = this.currentTime
    if (twoDigits < 10) {
    return `0${twoDigits}`
    }
  }

  stopClick() {
    // ... your code goes here
    const cleanInterval = clearInterval(this.intervalId)
    return cleanInterval
  }

  resetClick() {
    // ... your code goes here
    const resetCurrentTime = clearTimeout(this.currentTime = 0)
    return resetCurrentTime
  }

  splitClick() {
    return (`${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`)
  }
}