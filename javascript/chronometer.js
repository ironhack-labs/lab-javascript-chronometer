class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliseconds = 0;
  }
  startClick(callback) {
    callback;
    this.intervalId = setInterval(() => {
      if (this.milliseconds < 99) {
        this.milliseconds++
      } else {
        this.milliseconds = 0;
        this.currentTime++;
      }
    }, 10);
  }

  getMinutes() {
    return Math.trunc(this.currentTime / 60);
  }
  getSeconds() {
    return Math.trunc(this.currentTime - this.getMinutes() * 60);
  }

  getMilliseconds() {
    return this.milliseconds
  }

  twoDigitsNumber(value) {
    if (value < 10) {
      return `0${value}`
    } else {
      return `${value}`
    }
  }
  stopClick() {
    clearInterval(this.intervalId);

  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`
  }
}