class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.intervalMilli = 0;
    this.currentTimeMilli = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => (this.currentTime += 1), 1000);
    this.intervalMilli = setInterval(() => (this.currentTimeMilli += 1), 10);
  }
  getMinutes() {
    return parseInt(this.currentTime / 60);
  }
  getSeconds() {
    return parseInt(this.currentTime % 60);
  }
  getMilliseconds() {
    let milli = this.currentTimeMilli.toString();
    return milli.slice(-2);
  }
  twoDigitsNumber(num) {
    return `0${num}`.slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMilli);
  }
  resetClick() {
    const reset = (this.currentTimeMilli = 0, this.currentTime = 0)
    return reset
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    let milli = this.getMilliseconds();
    return `${min}:${sec}:${0}${milli}`;
  }
}
