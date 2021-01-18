class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    let minutes = this.getMinutes();
    let secs = minutes * 60;
    return this.currentTime - secs;
  }
  twoDigitsNumber(number) {
    return String(number).padStart(2, "0");
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let twoDigMin = this.twoDigitsNumber(minutes);
    let twoDigSecs = this.twoDigitsNumber(seconds);
    return `${twoDigMin}:${twoDigSecs}`;
  }
}
