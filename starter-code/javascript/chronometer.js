class Chronometer {
  constructor() {
    this.currentTime = 0;
  }

  startClick() {
    this.intervalId = setInterval(
      () => (this.currentTime = this.currentTime + 1),
      1000
    );
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(num) {
    return ("0" + num).slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  // splitClick() {}
}
