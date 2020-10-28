class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.millisecondsIntervalId = 0;
    this.currentMilliseconds = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        printTime();
      }
    }, 1000);
    this.millisecondsIntervalId = setInterval(() => {
      if (this.currentMilliseconds === 99) {
        this.currentMilliseconds = 0;
      }
      this.currentMilliseconds++;
      if (printMilliseconds) printMilliseconds();
    }, 10);
  }
  getMinutes() {
    const currentMinutes = Math.floor(this.currentTime / 60);
    return currentMinutes;
  }
  getSeconds() {
    const currentMinutes = Math.floor(this.currentTime / 60);
    const currentSeconds = this.currentTime - currentMinutes * 60
    return currentSeconds
  }


  twoDigitsNumber(num) {
    const concatZero = '0' + num;
    return concatZero.slice(-2);
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
    return (this.twoDigitsNumber(this.getMinutes()) + ':' + this.twoDigitsNumber(this.getSeconds()) + ':' + this.twoDigitsNumber(this.currentMilliseconds));
  }
}
