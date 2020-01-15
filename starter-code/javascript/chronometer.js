class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.isRunning = false;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1000;
    }, 1000);

    if (this.intervalId !== 0) this.isRunning = true;
  }
  getMinutes() {
    return Math.floor(this.currentTime / (1000 * 60)) % 60;
  }

  getSeconds() {
    return Math.floor(this.currentTime / 1000) % 60;
  }
  twoDigitsNumber(value) {
    if (value > 9) {
      return value.toString();
    }
    return '0' + value;
  }
  stopClick() {
    this.isRunning = false;
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
