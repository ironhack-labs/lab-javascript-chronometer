class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0;
  }
  startClick(callback) {
    const intervalId = setInterval(() => {
      this.currentTime++},1000);
      return this.currentTime
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }
  twoDigitsNumber(number) {
    let time = ''
      if (number < 10) {
      time = '0' + number
      }
    return time
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    return this.currentTime = 0
  }  
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let secondes = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${secondes}`
  }
}
