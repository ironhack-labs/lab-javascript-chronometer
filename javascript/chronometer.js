class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(
      () => this.currentTime++, 1000)
  }


  getMinutes() {
    // current time moet naar minuten
    let minutes = this.currentTime / 60
    return Math.floor(minutes)
  }

  getSeconds() {
    // minutes moeten naar seconden, dus *60
    let seconds = this.currentTime - this.getMinutes() * 60;
    return seconds;
  }
  twoDigitsNumber(number) {
    if (number < 10) {
      return `0${number}`
    } else { return number }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`
  }
}