class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }
  getSeconds() {
    return Math.floor(this.currentTime / 100);
  }
  getMilliseconds() {
    console.log(this.currentTime);
    return this.currentTime % 100;
  }
  twoDigitsNumber(arg) {
    let twoDigits = arg.toString();
    if (twoDigits.length < 2)
      return '0' + twoDigits;
    return twoDigits;
  }
  stopClick() {
    this.intervalId = clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
}