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
  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return this.currentTime % 6000;
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
