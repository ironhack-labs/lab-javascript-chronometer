class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = '';
  }
  startClick() {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
  }
  getMinutes() {
    let min = Math.floor(this.currentTime / 60);
    return min;
  }
  getSeconds() {
    let min = Math.floor(this.currentTime / 60);
    let sec = this.currentTime - min * 60;
    return sec;
  }
  twoDigitsNumber(i) {
    return ('0' + i).slice(-2);
  }
  stopClick(e) {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    return (this.currentTime = 0);
  }
  // splitClick() {}
}

const c1 = new Chronometer();
c1.startClick();




