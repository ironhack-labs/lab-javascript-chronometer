class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    let i = 0
    let intervalId = setInterval(() => {
      this.currentTime++
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.trunc(this.currentTime/60)
    return minutes
  }

  getSeconds() {
    let minutes = Math.trunc(this.currentTime/60)
    let seconds = this.currentTime - minutes * 60
    return seconds
  }
  twoDigitsNumber(value) {
    if (value < 9) {
      return `0${value}`
    }
    return `${value}`
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }
  
  // splitClick() {}
}