class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }
  startClick(cb) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      cb();
    },10)
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 100 / 60);
    return minutes
  }
  getSeconds() {
    let seconds = this.currentTime / 100 % 60;
    return seconds;
  }
  getMilliseconds() {
    let milliseconds = this.currentTime % 100;
    return milliseconds;
  }
  twoDigitsNumber(number) {
      return number < 10 ? "0" + number : number ;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds());
  }
}

