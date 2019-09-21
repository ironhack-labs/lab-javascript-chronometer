class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      printTime();
    }, 10);
  }

  getMinutes() {
    return Math.floor(Math.floor(this.currentTime / 100) / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  twoDigitsNumber(number) {
    return ("0" + number).slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {}
}