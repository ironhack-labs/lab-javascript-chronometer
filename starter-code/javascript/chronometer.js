
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    let chronObject = this;
    this.intervalId = setInterval(function () {
      chronObject.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(val) {
    return (val < 10 ? '0' : '') + val;
  }

  stopClick() {
    return clearInterval(this.intervalId);
  }

  resetClick() {
    return this.currentTime = 0;
  }
  // splitClick() {}
}