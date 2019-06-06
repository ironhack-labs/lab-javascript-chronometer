class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    const intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(a) {
    if (a === 0) {
      return "00";
    }
    if (a < 10) {
      return "0" + a;
    }
    if (a > 10) {
      return a.toString();
    }
  }

  stopClick() {
    clearInterval(setInterval);
  }
  resetClick() {}
  // splitClick() {}
}
