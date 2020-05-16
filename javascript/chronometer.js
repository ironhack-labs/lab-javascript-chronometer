class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick() {
    // ... your code goes here
    this.intervalId = setInterval(() => this.currentTime++, 1000)
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
  twoDigitsNumber(num) {
    // ... your code goes here
    const dobleNum = num.toString()
    if (dobleNum.length === 2) {
      return dobleNum
    } else if (dobleNum.length < 2) {
      return "0" + dobleNum
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
    let min = this.twoDigitsNumber(this.getMinutes())
    let sec = this.twoDigitsNumber(this.getSeconds())

    return min + ":" + sec
  }
}
