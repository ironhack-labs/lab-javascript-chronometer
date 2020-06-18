class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;

      if (typeof callback === "function") {
        callback(this.currentTime);
      }
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    if (number < 10) {
      return "0" + number.toString();
    } else if (number > 60 && number % 60 < 10) {
      return "0" + (number % 60).toString();
    } else {
      return number.toString();
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes(this.currentTime));
    let seconds = this.twoDigitsNumber(this.getSeconds(this.currentTime));

    return `${minutes}:${seconds}`;
  }
}
