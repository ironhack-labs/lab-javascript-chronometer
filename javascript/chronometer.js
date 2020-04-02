class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliSecCounter = 0;
    this.intervalIdMilliSec = 0;
  }
  startClick(callback) {

    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000);
    this.intervalIdMilliSec = setInterval(() => {
      if (this.milliSecCounter < 100) {
        this.milliSecCounter++
      } else {
        this.milliSecCounter = 0
      }

    }, 10)
    callback;

  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes
  }
  getSeconds() {
    let seconds = this.currentTime
    if (seconds < 60) {
      return seconds
    } else {
      return seconds % 60
    }

  }
  twoDigitsNumber(number) {

    return number < 10 ? "0" + number : `${number}`

  }
  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.intervalIdMilliSec)
  }
  resetClick() {
    this.currentTime = 0
    this.milliSecCounter = 0
  }
  splitClick() {

    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.milliSecCounter)}`
  }
}