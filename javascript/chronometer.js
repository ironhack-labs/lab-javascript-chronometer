class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof callback === "function") {
        callback();
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  getMilliseconds() {
    return this.currentTime % 100;
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return "0" + number;
    }

    return "" + number;
  }

  stopClick() {
    return clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return (
      this.twoDigitsNumber(this.getMinutes()) +
      ":" +
      this.twoDigitsNumber(this.getSeconds()) +
      ":" +
      this.twoDigitsNumber(this.getMilliseconds())
    );
  }
}
