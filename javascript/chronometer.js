class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      return this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime - Math.floor(this.currentTime / 60) * 60;
  }
  twoDigitsNumber(time) {
    if (time < 10) {
      return `0${time}`;
    } else {
      return `${time}`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`
    // return `${this.twoDigitsNumber(this.getMinutes)}:${this.twoDigitsNumber(this.getSeconds)}`
  }
}
