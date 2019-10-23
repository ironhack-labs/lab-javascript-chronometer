class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      printTime(chronometer);
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(value) {
    return value < 10 ? "0" + String(value) : String(value);
  }
  stopClick() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }

  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    this.currentTime = 0;
  }
}
