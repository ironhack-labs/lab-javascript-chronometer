class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.setInterval = setInterval(() => {
      this.currentTime++;

      console.log(this.currentTime);
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    let second = Math.floor(this.getMinutes() * 60);
    return this.currentTime - second;
  }
  twoDigitsNumber(number) {
    if (number >= 10) {
      return number.toString();
    } else {
      return "0" + number;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let twoD = this.twoDigitsNumber(min);
    let twoS = this.twoDigitsNumber(sec);
    return `${twoD}:${twoS}`;
  }
}
