class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 10);
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }
  getSeconds() {
    let seconds = Math.floor((this.currentTime/100) - this.getMinutes() * 60);
    return seconds;
  }
  getMilliseconds() {
    let miliSeconds = Math.floor(this.currentTime - this.getSeconds() * 100);
    return miliSeconds;
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return `0${number}`;
    } else {
      return `${number}`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    let milliSec = this.twoDigitsNumber(this.getMilliseconds());
    return `${min}:${sec}:${milliSec}`;
  }
}
