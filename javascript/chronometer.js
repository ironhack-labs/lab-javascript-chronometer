class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => {
      return (this.currentTime = this.currentTime + 1);
    }, 1000);
  }
  getMinutes() {
    let min = (this.minutes = this.currentTime / 60);
    return Math.floor(min);
  }
  getSeconds() {
    let min = (this.minutes = this.currentTime / 60);
    let minSec = min - Math.floor(min);
    return Math.round(minSec * 60);
  }
  twoDigitsNumber(value) {
    let str = value.toString();
    if (str.length === 1) {
      return "0" + str;
    } else {
      return str;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return (
      this.twoDigitsNumber(this.getMinutes()) +
      ":" +
      this.twoDigitsNumber(this.getSeconds())
    );
  }
}
