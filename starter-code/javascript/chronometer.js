class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliTime = 0;
    this.milliInterval = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      printSeconds();
      if (this.currentTime > 59) {
        printMinutes();
      }
    }, 1000);

    this.milliInterval = setInterval(() => {
      this.milliTime += 1;
      printMilliseconds();
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  getMilli(){
    return this.milliTime % 100;
  }
  twoDigitsNumber(value) {
    return (value < 10) ? '0' + value.toString() : value.toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.milliInterval);
  }
  resetClick() {
    this.currentTime = 0;
    this.milliTime = 0;
    printSeconds();
    printMinutes();
    printMilliseconds();
  }
  // splitClick() {}
}