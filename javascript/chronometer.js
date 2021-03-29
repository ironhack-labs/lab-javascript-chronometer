class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime++
    }, 1000)
  }
  getMinutes() {
    if (this.currentTime === 0)
      return 0
    let minute = this.currentTime / 60
    return Math.floor(minute)

  }
  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }
  twoDigitsNumber() {
    let twoDigits = ("0" + this.currentTime).slice(-2);
    return twoDigits
  }
  stopClick() {
    clearInterval(this.startClick)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let min = this.getMinutes()
    let sec = this.getSeconds()

    if (min < 10 && sec < 10) {
      return `0${min}:0${sec}`;
    } else if (min < 10 && sec > 10) {
      return `0${min}:${sec}`;
    } else if (min > 10 && sec < 10) {
      return `${min}:0${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  }
}