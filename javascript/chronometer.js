class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  startClick(cb) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (cb) {
        cb();
      }
    }, 1000);
  }

  getMinutes() {
    this.minutes = Math.floor(this.currentTime / 60);
    return this.minutes;
  }

  getSeconds() {
    this.seconds = this.currentTime % 60;
    return this.seconds;
  }

  twoDigitsNumber(number) {
    number < 10 ? (number = '0' + number) : number;
    return number.toString();
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let min = this.twoDigitsNumber(this.minutes);
    let sec = this.twoDigitsNumber(this.seconds);
    return `${min}:${sec}`;
  }
}
