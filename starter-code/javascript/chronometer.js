class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      printTime(chronometer);
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }
  getSeconds() {
    return Math.floor((this.currentTime % 6000) / 100);
  }

  getMilliSeconds() {
    return this.currentTime % 100;
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
    clearSplits();
  }
  splitClick() {
    this.currentTime = 0;
  }
}
