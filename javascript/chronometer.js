class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 10);
  }
  formatWithoutMilliseconds(time) {
    return Math.floor(time / 100);
  }

  getMinutes() {
    return Math.floor(this.formatWithoutMilliseconds(this.currentTime) / 60);
  }
  getSeconds() {
    return this.formatWithoutMilliseconds(this.currentTime) % 60;
  }
  getMilliseconds() {
    return this.currentTime;
  }

  twoDigitsNumber(number) {
    return ("0" + number).slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds()
    )}`;
  }
}
