class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(callback => {
      this.currentTime += 1;
    },1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    let seconds = this.currentTime - this.getMinutes() * 60
    return seconds
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
  }

  splitClick() {
    let seconds = this.getSeconds();
    let minutes = this.getMinutes();

    seconds = this.twoDigitsNumber(seconds);
    minutes = this.twoDigitsNumber(minutes);

    return `${minutes}:${seconds}`
  }

}
