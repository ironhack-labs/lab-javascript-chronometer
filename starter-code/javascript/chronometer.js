class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalID = "";
  }
  startClick() {
    this.intervalID = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  // getMinutes() {}
  // getSeconds() {}
  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}