class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    let i = 1;
    this.intervalId = setInterval(() => {
      this.currentTime = i;
      return i++;
    }, 1000);
  }
  getMinutes(callback) {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(num) {
    return ("0" + num.toString()).slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    this.seconds = this.twoDigitsNumber(this.getSeconds());
    this.minutes = this.twoDigitsNumber(this.getMinutes());
    return this.minutes + ":" + this.seconds;
  }
}
