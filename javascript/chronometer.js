class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitsNumber(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let x = this.computetwoDigitsNumber(this.getMinutes());
    let y = this.computetwoDigitsNumbertwoDigitsNumber(this.getSeconds());

    return `${x}:${y}`;
  }
}