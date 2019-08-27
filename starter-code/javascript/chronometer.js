class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId;
  }

  startClick() { this.intervalId = setInterval(() => { this.currentTime++ }, 1000) }

  getMinutes() { return Math.floor(this.currentTime / 60) }

  getSeconds() { return this.currentTime % 60 }

  twoDigitsNumber(digitToFormat) { return (digitToFormat < 10) ? `0${digitToFormat}` : `${digitToFormat}` }

  stopClick() { clearInterval(this.intervalId) }

  resetClick() { this.currentTime = 0 }
}