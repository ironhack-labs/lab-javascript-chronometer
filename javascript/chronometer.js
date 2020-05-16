class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    
  }

  startClick (callback) {
    this.intervalId = setInterval(()=>this.currentTime += 1, 1000)
  }

  getMinutes () {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds () {
    return this.currentTime % 60
  }

  twoDigitsNumber (num) {
    const numWithZero = ("0" + num)
    return numWithZero.slice(numWithZero.length-2)
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    const validMinutes = this.twoDigitsNumber(this.getMinutes())
    const validSecond = this.twoDigitsNumber(this.getSeconds())
    
    return `${validMinutes}:${validSecond}`
  }
}
