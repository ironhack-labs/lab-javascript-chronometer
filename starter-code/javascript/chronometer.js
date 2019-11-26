class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return this.twoDigitsNumber(parseInt(this.currentTime / 60));
  }

  getSeconds() {
    return this.twoDigitsNumber(parseInt(this.currentTime % 60));
  }

  twoDigitsNumber(number) {
    return number.toString().padStart(2, 0);
  }

  stopClick() {
    this.currentTime = 0;
    clearInterval(this.intervalId);
  }

  resetClick() {}

  splitClick() {}
}
