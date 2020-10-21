class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.intervalIdMili = 0;
    this.currentMili = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      return this.currentTime++;
    }, 1000);
    this.intervalIdMili = setInterval(() => {
      this.currentMili++;
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime - Math.floor(this.currentTime / 60) * 60;
  }
  getMiliSeconds() {
    return this.currentMili - Math.floor(this.currentMili / 100) * 100;
  };
  twoDigitsNumber(time) {
    if (time < 10) {
      return `0${time}`;
    } else {
      return `${time}`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMili);
  }
  resetClick() {
    this.currentTime = 0;
    this.currentMili = 0;
  }
  splitClick() {
    const minutes = this.twoDigitsNumber(this.getMinutes());
    const seconds = this.twoDigitsNumber(this.getSeconds());
    const miliseconds = this.twoDigitsNumber(this.getMiliSeconds());
    return `${minutes}:${seconds}:${miliseconds}`
  }
}
