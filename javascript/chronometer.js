class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) callback();
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds() {
  return this.currentTime % 60;
  }

  twoDigitsNumber(num) {
    num = `${num}`;
    if (num <= 9) {
      return `0${num}`;
    }
    return `${num}`;
  }

  stopClick() {
    return clearInterval(this.intervalId);
  }

  resetClick() {
    return (this.currentTime = 0);
  }

  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    let milliseconds = this.twoDigitsNumber(this.getMilliseconds());
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}
