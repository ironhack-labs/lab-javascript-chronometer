class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
      callback();
    }, 1000);
  }
  getMinutes() {
    return Number(Math.trunc(this.currentTime / 60));
  }

  getSeconds() {
    return Number(Math.trunc(this.currentTime % 60));
  }

  twoDigitsNumber(num) {
    if (String(num).length <= 1) {
      return "0" + String(num);
    } else {
      return String(num);
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
    if (String(min).length <= 1 || String(sec).length <= 1)
      return `0${min}:0${sec}`;
    else {
      return `${min}:${sec}`;
    }
  }
}
