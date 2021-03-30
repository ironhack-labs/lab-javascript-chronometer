class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1);
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60000);
    return minutes;
  }
  getSeconds() {
    let seconds = Math.floor((this.currentTime - this.getMinutes() * 60000)/1000);
    return seconds;
  }
  getMiliSeconds() {
    let miliSeconds = Math.floor(this.currentTime - this.getSeconds() * 1000);
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
    return `${min}:${sec}`;
  }
}
