class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMilliseconds = 0;
    this.millisecondsIntervalId = 0;
  }
  startClick(printTime, printMilliseconds) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTime) {
        printTime();
      }
    }, 1000)

    this.millisecondsIntervalId = setInterval(() => {
      if (this.currentMilliseconds === 99) {
        this.currentMilliseconds = 0;
      }
      this.currentMilliseconds++;
      if (printMilliseconds) {
        printMilliseconds();
      }
    }, 10)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(num) {
    return ('0' + num).slice(-2)
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId);
  }
  resetClick() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.currentMilliseconds)}`
  }
}
