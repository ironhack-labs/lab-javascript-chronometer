class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    }
    if (this.currentTime > 60) {
      return Math.floor(this.currentTime / 60);
    }
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(time) {
    let twoDigits = time.toString();

    if (twoDigits.length === 1) {
      return "0" + twoDigits;
    }
    else {
      return twoDigits;
    }
  }
  stopClick() {

    this.intervalId = clearInterval();
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
