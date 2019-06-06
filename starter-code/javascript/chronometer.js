class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    let minutes = Math.floor(this.currentTime / 60);
    return this.currentTime - minutes * 60
  }

  twoDigitsNumber(digit) {
    if (digit < 10) {
      return `0${digit}`
    } else if (digit >= 10) {
      return `${digit}`
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {}
}