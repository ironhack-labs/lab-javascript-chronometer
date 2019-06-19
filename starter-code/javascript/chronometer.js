class Chronometer {
  constructor() {
    this.isRunning = false;
    this.currentTime = 0;
  }
  startClick() {
    this.intervalId = setInterval(()=> {this.currentTime += 1}, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60) 
  }
  getSeconds() {
    return this.currentTime - (this.getMinutes() * 60)
  }
  twoDigitsNumber(val) {
    return val.toString().length > 1 ? `${val}` : `0${val}`
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}