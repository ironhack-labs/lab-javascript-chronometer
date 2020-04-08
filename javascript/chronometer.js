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
      if (printTime) printTime();
    }, 1000);

    this.millisecondsIntervalId = setInterval(() => {
      if (this.currentMilliseconds === 99) {
        this.currentMilliseconds = 0;
      }
      this.currentMilliseconds++;
      printMilliseconds();
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    if (this.getMinutes() >= 1) {
      return this.currentTime % 60;
    } else {
      return this.currentTime;
    }
  }
  twoDigitsNumber(number) {
    return ("0" + number).slice(-2);
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
    let minutes2 = this.twoDigitsNumber(this.getMinutes());
    let seconds2 = this.twoDigitsNumber(this.getSeconds());
    let milliseconds2 = this.twoDigitsNumber(this.currentMilliseconds);
    return `${minutes2}:${seconds2}:${milliseconds2}`;

  }
}
