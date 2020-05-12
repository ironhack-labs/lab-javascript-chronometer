class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000)
  }
  getMinutes() {
    let newTime = Math.floor(this.currentTime / 60);
    return newTime
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(num) {
    return ('0' + num).slice(-2)
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
    return `${min}:${sec}`
  }
}
