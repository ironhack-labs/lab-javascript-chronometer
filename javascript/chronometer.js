class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(cb) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (cb) {
        cb();
      }
    }, 1000);
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    if (this.currentTime >= 60) {
      return minutes;
    } else {
      return 0;
    }
  }
  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }
  twoDigitsNumber(num) {
    let s = String(num);
    if (s.length < 2) {
      s = "0" + s;
    }
    return s;
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
    if (min < 10) {
      return `${0}${min}:${0}${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  }
}
