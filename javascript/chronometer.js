class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      console.log(this.currentTime);
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return this.currentTime % 60
  }
  twoDigitsNumber(digit) {
    if (digit < 10) {
      return "0"+digit
    }
    else return digit
  }

  stopClick() {
    return clearInterval(this.intervalId)
  }
  resetClick() {
    return this.currentTime = 0
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes())+":"+ this.twoDigitsNumber(this.getSeconds())
  }
}
