class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => { // Why does it need to be an arrow functoin?
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    }
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    return this.currentTime % 60;
  }
  twoDigitsNumber() {
    if (this.currentTime < 10) {
      return `0${this.currentTime}`;
    }
    return this.currentTime;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
