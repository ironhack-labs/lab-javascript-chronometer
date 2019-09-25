class Chronometer {
    constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.intervalIdms = 0
    this.miliseconds = 0
  }

  addSecond = () => this.currentTime += 1

  addMiliSecond = () => this.miliseconds += 1

  startClick() {
    this.intervalId = setInterval(this.addSecond, 1000)
    this.intervalIdms = setInterval(this.addMiliSecond, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  getMiliSeconds() {
    if (this.miliseconds === 100) {
      this.miliseconds = 0
    }
    return this.miliseconds
  }

  twoDigitsNumber(value) {
    return value.toString().padStart(2, "0")
  }

  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.intervalIdms)
  }

  resetClick() {
    this.currentTime = 0
    this.miliseconds = 0
  }

  splitClick() {
    return {
      min: this.twoDigitsNumber(this.getMinutes()),
      sec: this.twoDigitsNumber(this.getSeconds()),
      miliSec: this.twoDigitsNumber(this.getMiliSeconds())
    }
  }
}