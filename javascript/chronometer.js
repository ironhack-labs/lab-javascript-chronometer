class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60; // => Math.floor(this.currentTime / 60)
  }
  twoDigitsNumber(number) {
    let twoDigit = number < 10 ? "0" + number : String(number);
    return twoDigit;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let result =
      this.twoDigitsNumber(this.getMinutes()) +
      ":" +
      this.twoDigitsNumber(this.getSeconds());
    return result;
  }
}
