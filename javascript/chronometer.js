class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime += 1, 10); //made interval every 10 milliseconds to match up with the two digit clock format
  }
  getMinutes() {
    return this.twoDigitsNumber(Math.floor(this.currentTime / (60 * 100)));
  }
  getSeconds() {
    return this.twoDigitsNumber(Math.floor((this.currentTime / 100) % 60));
  }
  getMilliseconds() {
    let time = (this.currentTime / 100) % 1;
    return this.twoDigitsNumber(Math.floor(time.toFixed(2) * 100)); //used Math.floor and toFixed to correct rounding errors
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
    return `${this.getMinutes(minutes)}:${this.getSeconds(seconds)}:${this.getMilliseconds()}`;
  }
}