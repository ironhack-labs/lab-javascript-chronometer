class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
    }, 1000);
  }
  getMinutes() {
    return Number(Math.floor(this.currentTime / 60).toFixed(0));
  }
  getSeconds() {
    if (this.currentTime === 0) return 0;
    const seconds = this.getMinutes() * 60;
    return this.currentTime - seconds;
  }
  twoDigitsNumber(number) {
    number = number < 10 ? "0" + number : number.toString();
    return number;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    return (this.currentTime = 0);
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`;
  }
}
