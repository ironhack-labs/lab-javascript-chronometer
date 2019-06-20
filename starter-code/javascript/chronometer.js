class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => this.currentTime += 1, 1000);
    console.log(this.currentTime)
  }

  getMinutes() {
      return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
      return this.currentTime % 60;
  }
  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num}`;
    }
    return `${num}`;
  }

  stopClick() {
    clearInterval(this.intervalId);
    console.log(this.currentTime);
  }

  resetClick() {
    this.currentTime = 0;
    return this.currentTime;
  }
  // splitClick() {}
}