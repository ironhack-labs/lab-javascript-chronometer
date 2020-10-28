class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    setInterval(() => this.currentTime++, 1000)
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60)
  }
  twoDigitsNumber() {

    const twoDigitsMinutes = ('0' + this.getMinutes).slice(-2)
  
    return twoDigitsMinutes
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.startClick)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    let min = this.getMinutes()
    let sec = this.getSeconds()
    return (`${0}${min}:${0}${sec}`)
  }
}
