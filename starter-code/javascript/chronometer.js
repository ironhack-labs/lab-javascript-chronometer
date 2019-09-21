class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.mili = 0;
    this.intervalId;
    this.miliIntervalId;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);

    this.miliIntervalId = setInterval(() => {
      this.mili < 100 ? (this.mili += 1) : (this.mili = 0);
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  getMilisecondes() {
    return this.mili;
  }
  twoDigitsNumber(num) {
    return num.toString().length < 2 ? "0" + num : num.toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.miliIntervalId);
  }
  resetClick() {
    this.currentTime = 0;
    this.mili = 0;
  }
  splitClick() {}
}
