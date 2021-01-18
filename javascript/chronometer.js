class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalID = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber() {
    return ("0" + this.currentTime.toString()).slice(-2);
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    return (this.currentTime = 0);
  }
  splitClick() {
    this.minutes = this.twoDigitsNumber(this.getMinutes());
    this.seconds = this.twoDigitsNumber(this.getSeconds());
    return `${this.minutes}:${this.seconds}`;
  }
}
