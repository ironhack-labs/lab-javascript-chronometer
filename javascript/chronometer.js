class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback()
      console.log(this.currentTime)
    }, 1000);
  }

  getMinutes() {
    return (this.currentTime - this.currentTime % 60) / 60
  }
  getSeconds() {
    return this.currentTime % 60
  }

  twoDigitsNumber(number) {
    return number.toString().padStart(2, '0')
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes(this.currentTime))}:${this.twoDigitsNumber(this.getSeconds(this.currentTime))}`
  }
}
