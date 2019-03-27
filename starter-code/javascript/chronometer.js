class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = '';
  }
  startClick() {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }
  twoDigitsNumber(i) {
    return ('0' + i).slice(-2);
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    return (this.currentTime = 0);
  }
  // splitClick() {}
}

const c1 = new Chronometer();
c1.startClick();
