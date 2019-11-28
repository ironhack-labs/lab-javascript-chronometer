class Chronometer {
  constructor() {
    this.currentTime = 0; // measured in seconds
    this.milliseconds = 0;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      if (++this.milliseconds % 100 == 0) this.currentTime++; // every 100 milliseconds add 1 second to currentTime
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  getMilliseconds(){
    return this.milliseconds % 100;
  }
  twoDigitsNumber(number) {
    return ((number < 10) ? '0' : '') + number;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }
}