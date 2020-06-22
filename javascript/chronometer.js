class Chronometer {
  constructor() {
    this.intervalId = 0;
    this.currentTime = 0;
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime += 1;
    }, 1000)
  }
  getMinutes() {
    return Math.floor((this.currentTime / 60));
  }
  getSeconds() {
    return this.currentTime;
  }
  twoDigitsNumber() {
    if (this.getMinutes() < 10) {
      return `0${this.currentTime}`;
    }
    if (this.getSeconds() < 10) {
      return `0${this.currentTime}`
    }
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick(min, sec) {
    min = this.getMinutes();
    sec = this.getSeconds();

    if (min < 10) {
      return `${0}${min}:${0}${sec}`;
    } else return `${min}:${sec}`;
  }
}