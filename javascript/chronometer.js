class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    setInterval((callback) => this.currentTime++, 1000)
  }
  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }
  getSeconds() {
    // ... your code goes here
    const seconds = this.currentTime - this.getMinutes() * 60
    return seconds
  }
  twoDigitsNumber() {
    // ... your code goes here
    if (this.getMinutes() < 10) {
      return "0" + this.getMinutes()
    } else if (this.getSeconds() < 10) {
      return "0" + this.getSeconds()
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

    if (min < 10 || sec < 10) {
      return `${0}${min}:${0}${sec}`
    } else {
      return `${min}:${sec}`
    }
  }
}
