class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => (this.currentTime += 1), 1000) //Duda 
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  } 
  getSeconds() {
    return this.currentTime % 60
  }
  twoDigitsNumber(num) {
    return `0${num}`.slice(-2)
  }
  stopClick() {
    clearInterval(this.currentTime)
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    return `${0}${min}:${0}${sec}`
  }
}
