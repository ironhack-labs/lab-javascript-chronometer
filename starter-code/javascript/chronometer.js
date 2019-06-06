class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => (this.currentTime += 1), 1000);
  }
  getMinutes() {
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    var seconds = this.currentTime % 60;
    return seconds;
  }
  twoDigitsNumber(number) {
    if (number < 10) {
      return `0${number}`;
    } else return `${number}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {}
}
