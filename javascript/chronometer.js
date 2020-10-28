class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      callback()
      console.log(this.currentTime)
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60 )
  }
  
  getSeconds() {
    return this.currentTime % 60
  }
  twoDigitsNumber(value) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  }

  stopClick() {
    return clearInterval(this.intervalId)
  }
  resetClick() {
    return this.currentTime = 0
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds())
  }
}
