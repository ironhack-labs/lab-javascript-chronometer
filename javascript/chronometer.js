class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime += 1, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(getTime) {
    return getTime.toString().length === 2 ? getTime.toString() : '0' + getTime.toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick(minutes, seconds) {
    return `${this.twoDigitsNumber(this.getMinutes(minutes))}:${this.twoDigitsNumber(this.getSeconds(seconds))}`;
  }
}