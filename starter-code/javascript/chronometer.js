class Chronometer {
  constructor() {
    this.currentTime = 0;
  }

  // startClick() {}
  startClick(intervalId) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  // getMinutes() {}
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  // getSeconds() {}

  getSeconds() {
    return this.currentTime % 60;
  }

  // twoDigitsNumber() {}
  twoDigitsNumber(x) {
    if (x < 10) {
      return (x = "0" + x);
    } else if (x >= 10) {
      return x.toString();
    }
  }

  // stopClick() {}
  stopClick() {
    clearInterval(this.intervalId);
  }

  // resetClick() {}
  resetClick() {
    clearInterval(this.currentTime);
  }
}
// splitClick() {}
