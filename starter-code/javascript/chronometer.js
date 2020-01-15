class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick = () =>
    (this.intervalId = setInterval(() => this.currentTime++, 1000));

  getMinutes = () => Math.floor(this.currentTime / 60);

  getSeconds = () => this.currentTime % 60;

  // getMilliseconds = () => this.currentTime %

  twoDigitsNumber = a => (`${a}`.length - 1 ? `${a}` : `0${a}`);

  stopClick = () => clearInterval(this.intervalId);

  resetClick = () => (this.currentTime = 0);

  splitClick = () =>
    `${this.twoDigitsNumber(this.getMinutes())} : ${this.twoDigitsNumber(
      this.getSeconds()
    )}`;
}
