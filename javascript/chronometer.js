class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.intervalIdMilliseconds = 0;
    this.currentTimeMilliseconds = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);

    this.intervalIdMilliseconds = setInterval(() => {
      this.currentTimeMilliseconds++;
      printTime(this.getMinutes(), this.getSeconds(), this.getMilliseconds())
    }, 10);

  }
  getMinutes() {
    return this.twoDigitsNumber(Math.floor(this.currentTime / 60));
  }
  getSeconds() {
    return this.twoDigitsNumber(this.currentTime % 60);
  }

  getMilliseconds() {
    return this.twoDigitsNumber(this.currentTimeMilliseconds.toString().slice(-2));
  }

  twoDigitsNumber(digit) {
    return (digit.toString().length === 1) ? `0${digit}` : `${digit}`
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMilliseconds)
  }
  resetClick() {
    this.currentTime = 0;
    this.currentTimeMilliseconds = 0;
    printTime('00', '00', '00')
  }
  splitClick() {
    return `${this.getMinutes()}:${this.getSeconds()}:${this.getMilliseconds()}`
  }
}
