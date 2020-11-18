class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    return Math.trunc(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(val) {
    if (val >= 10) {
      return val.toString();
    } else if (val < 10) {
      return 0 + val.toString();
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let minutes = this.getMinutes();
    let secondes = this.getSeconds();
    let digitsSecondes = this.twoDigitsNumber(secondes);
    let digitsMinutes = this.twoDigitsNumber(minutes);
    return `${digitsMinutes}:${digitsSecondes}`;
  }
}
