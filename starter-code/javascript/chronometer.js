class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick = () =>
    (this.intervalId = setInterval(() => this.currentTime++, 10));

  getMinutes = () => Math.floor(this.currentTime / (60*100)) % 60;

  getSeconds = () => Math.floor(this.currentTime / 100) % 60;

  getMilliseconds = () => Math.floor(this.currentTime) % 100;

  twoDigitsNumber = a => (`${a}`.length - 1 ? `${a}` : `0${a}`);

  stopClick = () => clearInterval(this.intervalId);

  resetClick = () => (this.currentTime = 0);

  splitClick = () =>
    `${this.twoDigitsNumber(this.getMinutes())} : ${this.twoDigitsNumber(
      this.getSeconds()
    )} : ${this.twoDigitsNumber(this.getMilliseconds())}`;
}
