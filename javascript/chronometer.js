export class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime - this.getMinutes() * 6000) / 100);
  }

  getMilliSeconds(){
    return this.currentTime % 100;
  }

  twoDigitsNumber(nb) {
    if (nb < 10) return "0" + String(nb);
    else return String(nb);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    const minFormat = this.twoDigitsNumber(this.getMinutes());
    const secFormat = this.twoDigitsNumber(this.getSeconds());
    const milFormat = this.twoDigitsNumber(this.getMilliSeconds());
    return `${minFormat}:${secFormat}:${milFormat}`;
  }
}
