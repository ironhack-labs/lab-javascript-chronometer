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
    } else {
      return 0;
    }
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(value) {
    let twoDigits = value.toString();

    if (twoDigits.length === 1) {
      return "0" + twoDigits;
    } else {
      return twoDigits;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds()
    )}:00`;
  }
}
