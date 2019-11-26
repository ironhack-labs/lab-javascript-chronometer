class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    this.currentTime = Math.floor(this.currentTime / 60);
    return this.currentTime;
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return "" + value;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {}
}
