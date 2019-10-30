class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick() {
     this.intervalId = setInterval (() => {
      return this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }

  twoDigitsNumber(value) {
    if (value < 10) {
      return '0' + value;
    } else {
      return String(value);
    }
  }

  stopClick() {
    return clearInterval(this.intervalId);
  }

  resetClick() {
    return this.currentTime = 0;
  }
  // splitClick() {}
}