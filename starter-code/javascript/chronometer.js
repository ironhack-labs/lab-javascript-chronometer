class Chronometer {
  constructor() {
    this.currentTime = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
    return this.intervalId;
  }
  getMinutes() {
    return parseInt(this.currentTime / 60);
  }
  getSeconds() {
    const secondsCrono = this.currentTime % 60;
    return secondsCrono;
  }
  twoDigitsNumber(time) {
    const timeFormated = (time < 10 ? "0" : "") + time;
    return timeFormated;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
