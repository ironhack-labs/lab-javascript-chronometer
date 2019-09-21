class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.running = false
  }
  setSecond = () => this.currentTime += 10
  
  startClick() {
    this.intervalId = setInterval(() => {
      this.setSecond()
      printTime()
    }, 10)
    this.running = true
  }
  getMinutes() {
    return Math.floor((this.currentTime / (1000 * 60)) % 60)
  }
  getSeconds() {
    return Math.floor((this.currentTime / 1000) % 60)
  }
  getMilliseconds() {
    if (this.currentTime === 0) return this.twoDigitsNumber(0)
    return String(this.currentTime).slice(-3,-1)
  }

  twoDigitsNumber(n) {
    return n.toString().length < 2 ? "0"+n : n.toString()
  }
  stopClick() {
    clearInterval(this.intervalId)
    this.running = false
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {}
}