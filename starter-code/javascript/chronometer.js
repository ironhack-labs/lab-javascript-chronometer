class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => this.currentTime++, 10);
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 100 / 60);
    return minutes;
  }
  getSeconds() {
    let seconds = Math.floor(this.currentTime / 100);
    seconds = seconds % 60;
    return seconds;
  }
  getMilli() {
    let mili = this.currentTime;
    mili = mili % 100;
    return mili;
  }
  twoDigitsNumber(number) {
    let twoDigit = "";
    if (number >= 10) {
      twoDigit += number;
    } else {
      twoDigit += `0${number}`;
    }
    return twoDigit;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {}
}
