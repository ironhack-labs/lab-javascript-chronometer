class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {this.currentTime++, callback()}, 10);
  }
  getMinutes() {
    return this.twoDigitsNumber(Math.floor(this.currentTime / 6000));
  }
  getSeconds() {
    return this.twoDigitsNumber(Math.floor((this.currentTime / 100) % 60));
  }
  getMilliseconds() {
    return this.twoDigitsNumber(Math.floor(this.currentTime % 100));
  }
  twoDigitsNumber(number) {
    number = number.toString();
    return number.length !== 2 ? "0" + number : number;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return this.getMinutes() + ":" + this.getSeconds() + ":" + this.getMilliseconds();
  }
}
