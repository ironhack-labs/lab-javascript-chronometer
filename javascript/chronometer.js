class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime += 1
    }, 1000)
  }

  getMinutes() {
    if (this.currentTime <= 60) {
      return 0
    } else { return Math.floor(this.currentTime / 60 )
    }
  }
  
  getSeconds() {
    if (this.currentTime < 60) {
      return this.currentTime
    } else {
      return this.currentTime - 60
    }
  }
  twoDigitsNumber() {
    if (this.currentTime < 10) {
      return "0" + this.currentTime
    } else {
      return this.currentTime
    }
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
