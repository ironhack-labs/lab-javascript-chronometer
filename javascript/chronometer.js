class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
  }
  getMinutes() {
    return parseInt(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }
  getMiliseconds() {
    //console.log((this.getSeconds() * 100) / 1000);
    return this.currentTime + this.getSeconds() * 1000;
  }
  twoDigitsNumber(number) {
    let time = new String(number);
    console.log(time.length, "string");
    //return number <= 9 ? `0${number}` : `${number}`;
    return time.length > 1 ? `${number}` : `0${number}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const minutes = this.twoDigitsNumber(this.getMinutes());
    const seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
