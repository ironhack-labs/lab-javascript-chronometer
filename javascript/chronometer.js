class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    return setInterval(() => this.currentTime ++ , 1000)
  }
  getMinutes() {
    if(this.currentTime === 0) {
      return 0;
    }

    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    if(this.currentTime === 0) {
      return 0;
    }

    return this.currentTime - this.getMinutes() * 60;
  }
  twoDigitsNumber(number) {
    return String(number).padStart(2, '0');
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    this.stopClick();
    this.currentTime = 0;
  }
  splitClick() {
    const minutes = this.twoDigitsNumber(this.getMinutes());
    const seconds = this.twoDigitsNumber(this.getSeconds());
    const str = `${minutes}:${seconds}`;
    return str;
  }
}
