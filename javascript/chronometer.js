class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => (this.currentTime ++), 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return parseInt((this.currentTime / 100) % 60);
  }

  getMilliseconds() {
    return this.currentTime % 100;
  }

  twoDigitsNumber(time) {
    if (time < 10){
      return `0${time}`;
    } else {
      return time;
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    const min = this.twoDigitsNumber(this.getMinutes());
    const sec = this.twoDigitsNumber(this.getSeconds());
    const mil = this.twoDigitsNumber(this.getMilliseconds());

    return `${min}:${sec}:${mil};`;
  }
}
