class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    const minutes = this.getMinutes();
    const seconds = this.currentTime - minutes * 60;
    return seconds;
  }
  twoDigitsNumber(number) {
    return ("0" + number).slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes(this.currentTime))}:${this.twoDigitsNumber(this.getSeconds(this.currentTime))}`;
  }
}