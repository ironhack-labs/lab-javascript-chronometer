class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 100 / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime / 100 % 60);
  }
  getMilliseconds() {
    return Math.floor(this.currentTime % 6000)
  }
  twoDigitsNumber(num) {
    return ("00" + num).slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let mili = this.getMilliseconds();
    while (mili >= 100) mili /= 10;
    mili = Math.floor(mili)
      ; return this.twoDigitsNumber(this.getMinutes()) + ':'
        + this.twoDigitsNumber(this.getSeconds()) + ':'
        + mili;
  }
}
