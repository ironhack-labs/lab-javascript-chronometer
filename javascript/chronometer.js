class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(this.tick.bind(this), 1000, callback)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }
  twoDigitsNumber() {
    return ('0' + this.currentTime).slice(-2)
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    return `0${Math.floor(this.currentTime/60)}:0${this.currentTime - this.getMinutes() * 60}`;
  }

  tick(callback) {
    this.currentTime++
    if (callback !== undefined) {
      callback(this.currentTime);
    }
  }

}
