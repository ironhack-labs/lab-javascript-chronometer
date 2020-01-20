class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTime();
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    if (number <= 10) {
      return "0" + number;
    }
    return "" + number;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    printSplit();
  }
}
