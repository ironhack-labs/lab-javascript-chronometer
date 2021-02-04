class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    let addTime = () => {
      this.currentTime++;
      return callback;
    }
    this.intervalId = setInterval(addTime, 1000);
  }

  getMinutes() {
    return this.currentTime = Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime = Math.floor(this.currentTime % 60)
  }

  twoDigitsNumber() {
    return 0 + JSON.stringify(this.currentTime);
  }

  stopClick() {
    let clearTime = () => { this.intervalId = 0; }
    clearInterval(clearTime, 1000);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return this.twoDigitsNumber(this.getMinutes(this.currentTime)) + ':' + this.twoDigitsNumber(this.getSeconds(this.currentTime));
  }
}
