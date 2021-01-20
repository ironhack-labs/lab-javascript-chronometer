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
    return Math.floor(this.currentTime / 6000);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  getMilliseconds() {
    return this.currentTime % 100;
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
    // return `${this.twoDigitsNumber(this.minutes)}:${this.twoDigitsNumber(this.seconds)}`;
  }
}
