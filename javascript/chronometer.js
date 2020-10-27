class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }
  twoDigitsNumber() {
    return number < 10 ? '0' + number : number;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime === 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  
  }
}
