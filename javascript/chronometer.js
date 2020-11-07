class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      return this.currentTime;
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }
  getMilliseconds() {
    return 0;
  }
  twoDigitsNumber(number) {
    return (number < 10 ? `0${number}` : `${number}`); 
    }
  stopClick() {
    clearInterval(this.intervalId);
    this.currentTime = 0;
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }
}
