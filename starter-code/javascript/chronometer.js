class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 10;
      printTime(chronometer.twoDigitsNumber(chronometer.getMinutes()), chronometer.twoDigitsNumber(chronometer.getSeconds()), chronometer.twoDigitsNumber(chronometer.getmiliSeconds()));
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60000);
  }
  getSeconds() {
    return Math.floor(Math.floor(this.currentTime / 1000) % 60);
  }
  getmiliSeconds() {
    return (this.currentTime - this.getSeconds() * 1000 - this.getMinutes() * 60 * 1000) / 10;
  }
  twoDigitsNumber(number) {
    if (number.toString().length < 2) {
      return `0${number.toString()}`
    }
    return number.toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return this.currentTime;
  }
}