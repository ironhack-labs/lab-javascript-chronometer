class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {
    setInterval(() => {
      this.currentTime += 1
    }, 1000)
  }

  getMinutes() {
    const min = Math.floor(this.currentTime / 60)
    return min
  }

  getSeconds() {
    const secs = this.currentTime % 60
    return secs
  }

  twoDigitsNumber(num) {
    let numString = num.toString()
    if(numString.length < 2) {
      numString = "0" + numString
    }
    return numString
  }

  stopClick() {
    this.intervalId = clearInterval()
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}