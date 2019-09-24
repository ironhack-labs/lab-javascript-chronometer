class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime ++
    }, 100);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 600)
  }

  getSeconds(num) {
    return  Math.trunc(this.currentTime / 10) % 60
  }

  twoDigitsNumber(num) {
    return num.toString().length === 1 ? `0${num}`: num + ''
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  
  getMilliseconds() {
    return this.currentTime % 10
  }
}