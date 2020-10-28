class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // Do something with callback

    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 10);
  }
  getMilSeconds() {
    const milSecond = `${this.currentTime}`.slice(-2);

    return milSecond;
  }
  getMinutes() {
    const newSeconds = Math.ceil(this.currentTime / 100);
    const mins = Math.floor(newSeconds / 60);
    if (newSeconds === 0) {
      return 0;
    }
    return mins;
  }
  getSeconds() {
    const newSeconds = Math.ceil(this.currentTime / 100);

    const mins = Math.floor(newSeconds / 60);

    const seconds = newSeconds - mins * 60;
    return seconds;
  }
  twoDigitsNumber(num) {
    const timeStr = "0" + num;
    return timeStr.slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick(numOne, numTwo) {
    return this.twoDigitsNumber(numOne) + ":" + this.twoDigitsNumber(numTwo);
  }
}
