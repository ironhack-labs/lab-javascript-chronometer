class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => (this.currentTime += 1), 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    let minutes = Math.floor(this.currentTime / 60);
    let seconds = this.currentTime - minutes * 60;
    if (seconds >= 60) {
      seconds = 0;
    }
    return seconds;
  }
  twoDigitsNumber(time) {
    if (time.toString().length === 1) {
      return "0" + time;
    }
    return time.toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes())
    let sec = this.twoDigitsNumber(this.getSeconds())
    return `${min}:${sec}`
  }
}
