class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime += 1;
    }, 1000);
    callback;
  }
  getMinutes() {
    return this.currentTime === 0 ? 0 : Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime === 0 ? 0 : this.currentTime % 60;
  }
  twoDigitsNumber(time) {
    return time >= 0 && time < 10 ? "0" + time : time.toString();
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
