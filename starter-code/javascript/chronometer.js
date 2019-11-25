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
    return this.twoDigitsNumber( Math.floor(this.currentTime / 60) );
  }
  getSeconds() {
    return this.twoDigitsNumber( this.currentTime - this.getMinutes() * 60 );
  }
  twoDigitsNumber(number) {
    return ((number < 10) ? '0' : '') + number;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.getMinutes()}:${this.getSeconds()}`;
  }
}