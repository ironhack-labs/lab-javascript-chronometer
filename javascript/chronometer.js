class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId= 0
  }

  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => this.currentTime++, 1000)
    return this.intervalId
  }

  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }
  getSeconds() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60)
    const seconds = this.currentTime - minutes * 60
    return seconds
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    if (number < 10) {
      return `0${number}`
    }
    else {
      return `${number}`
    }
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    let min = this.getMinutes()
    let sec = this.getSeconds()

  return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`
  }
}
