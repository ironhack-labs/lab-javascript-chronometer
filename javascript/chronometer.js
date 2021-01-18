class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    const incTime = () => (this.currentTime += 1);
    if (!this.intervalId) this.intervalId = setInterval(incTime, 1000);
  }

  getMinutes() {
    return Number(Math.floor(this.currentTime / 60));
  }

  getSeconds() {
    return Number(Math.floor(this.currentTime % 60));
  }

  twoDigitsNumber(num) {
    return `0${num}`.slice(-2);
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
