class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => (this.currentTime += 1), 1000);
  }
  getMinutes() {
    return parseInt(this.currentTime / 60);
  }
  getSeconds() {
    return (this.currentTime -= this.getMinutes() * 60);
  }
  twoDigitsNumber(number) {
    if (number.length === 2) {
      return `${number}`;
    } else {
      return `0${number}`;
    }
  }
  stopClick() {
    clearInterval();
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
