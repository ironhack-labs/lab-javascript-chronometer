class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      callback();
    },1);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    let seconds = this.currentTime - this.getMinutes() * 60
    return seconds
  }

  getMilliseconds() {
    let milliseconds = this.currentTime * 1000;
    return milliseconds
  }

  twoDigitsNumber(number) {
    number = number.toString();
    if (number.length === 1) { number = `0${number}` }
    return number;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
    printTime();
  }

  splitClick() {
    let seconds = this.getSeconds();
    let minutes = this.getMinutes();

    seconds = this.twoDigitsNumber(seconds);
    minutes = this.twoDigitsNumber(minutes);

    return `${minutes}:${seconds}`
  }

}
