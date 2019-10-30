class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.splits = []
    this.status = 'Stopped'
  }
  startClick() {
    this.status = 'Running'
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    }, 1000)
  }
  getMinutes() {
    return parseInt(this.currentTime / 60)
  }
  getSeconds() {
    return parseInt(this.currentTime % 60)
  }
  twoDigitsNumber(num) {
    let number = num.toString()
    if (number.length === 1) {
      return '0' + number
    } else {
      return number
    }
  }
  stopClick() {
    this.status = 'Stopped'
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
    this.splits = []
  }
  splitClick() {
    if (this.currentTime !== 0) {
      this.splits.push(this.currentTime)
    }
  }
}
