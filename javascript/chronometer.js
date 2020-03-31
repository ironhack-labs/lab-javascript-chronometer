class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    setInterval(obj => this.currentTime ++, 1000)
  }
  getMinutes() {
    const minutes = parseInt(this.currentTime / 60)
    return minutes
  }
  getSeconds() {
    const minutesInSeconds = (this.getMinutes()) * 60
    const remainingSeconds = this.currentTime - minutesInSeconds
    return remainingSeconds;
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
