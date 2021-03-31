class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => this.currentTime += 1, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 6000 / 100);
  }

  getMilliseconds() {
    return this.currentTime % 100;
  }

  twoDigitsNumber(number) {
    return ('00' + number).slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    const minutes = this.twoDigitsNumber(this.getMinutes());
    const seconds = this.twoDigitsNumber(this.getSeconds());
    const miliseconds = this.twoDigitsNumber(this.getMilliseconds());
    return `${minutes}:${seconds}:${miliseconds}`
  }
}
