class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(this.tick.bind(this), 1000, callback)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }
  twoDigitsNumber() {
    this.getMinutes.toFixed
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

  tick(callback) {
    this.currentTime++
    if (callback !== undefined) {
      callback(this.currentTime);
    }
  }

}
