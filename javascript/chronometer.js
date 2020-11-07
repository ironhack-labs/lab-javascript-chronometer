class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => this.currentTime++, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber() {
    const minutes = "0" + this.currentTime
    return minutes.slice(-2);
  }
  stopClick() {
    clearInterval(this.currentTime);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const minutes = ("0" + Math.floor(this.currentTime / 60)).slice(-2)
    const seconds = ("0" + this.currentTime % 60).slice(-2)
    return `${minutes}:${seconds}`
  }
}
